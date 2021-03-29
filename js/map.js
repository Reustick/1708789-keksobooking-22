/* global L:readonly */
import { START_COORDINATES, MAP_ZOOM, MAP_IMAGES_URL, MAP_ATTRIBUTION, SYMBOLS_AFTER_COMA, QUANTITY_OF_OFFERS } from './const.js';
import { disableForm } from './disable-form.js';
import { showAlert } from './util.js';
import { getData } from './api.js';
import { createPopupCard } from './cards.js';
import { filterOffers } from './filter.js';

const addressField = document.querySelector('#address');
const map = L.map('map-canvas');
const secondaryPinLayer = L.layerGroup().addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const secondaryPinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinMarker = L.marker(
  {
    lat: START_COORDINATES.lat,
    lng: START_COORDINATES.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const setAddress = (x, y) => {
  addressField.value = `${ x }, ${ y }`;
};

const returnMainPin = () => {
  mainPinMarker.setLatLng(L.latLng(START_COORDINATES.lat, START_COORDINATES.lng));
  setAddress(START_COORDINATES.lat, START_COORDINATES.lng);
};

const setSecondaryPin = () => {
  getData(
    (offers) => {
      addDataToMap(offers);
    },
    () => showAlert('Ошибка. Не удалось получить данные'),
  );
};

const addSecondaryPin = (locationX, locationY, element) => {

  const secondaryPinMarker = L.marker(
    {
      lat: locationX,
      lng: locationY,
    },
    {
      icon: secondaryPinIcon,
      keepInView: true,
    },
  );

  secondaryPinMarker
    .addTo(secondaryPinLayer)
    .bindPopup(createPopupCard(element));
};

const removeSecondaryPin = () => {
  secondaryPinLayer.clearLayers();
};

const addDataToMap = (offers) => {
  offers.slice(0, QUANTITY_OF_OFFERS).forEach(element => {
    const {lat, lng} = element.location;

    addSecondaryPin(lat, lng, element);
  });
};

const addAllDataToMap = (offers) => {
  offers.forEach(element => {
    const {lat, lng} = element.location;

    addSecondaryPin(lat, lng, element);
  });
};

const initMap = () => {
  map.on('load', () => {
    disableForm(false);
    setAddress(START_COORDINATES.lat, START_COORDINATES.lng);
  })
    .setView({
      lat: START_COORDINATES.lat,
      lng: START_COORDINATES.lng,
    }, MAP_ZOOM);

  L.tileLayer(
    MAP_IMAGES_URL,
    {
      attribution: MAP_ATTRIBUTION,
    },
  ).addTo(map);

  mainPinMarker.addTo(map);

  mainPinMarker.on('move', (evt) => {
    const { lat, lng } = evt.target.getLatLng();
    setAddress(lat.toFixed(SYMBOLS_AFTER_COMA), lng.toFixed(SYMBOLS_AFTER_COMA));
  });
  setSecondaryPin();
  filterOffers(removeSecondaryPin, addAllDataToMap, QUANTITY_OF_OFFERS);
};
export { initMap, returnMainPin, setSecondaryPin };