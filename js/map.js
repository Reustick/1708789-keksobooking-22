/* global L:readonly */
import { disableForm } from './disable-form.js';
import { createPopup } from './cards.js';
import { createBookingsObject } from './data.js';
import { START_COORDINATES, MAP_ZOOM, MAP_IMAGES_URL, MAP_ATTRIBUTION, SYMBOLS_AFTER_COMA, QUANTITY_OF_OFFERS } from './const.js';

const addressField = document.querySelector('#address');
const map = L.map('map-canvas')
  .on('load', () => {
    disableForm(false);
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

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
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
).addTo(map);

const getAddress = (x, y) => {
  addressField.value = `${ x }, ${ y }`;
}

mainPinMarker.on('move', (evt) => {
  const { lat, lng } = evt.target.getLatLng()
  getAddress(lat.toFixed(SYMBOLS_AFTER_COMA), lng.toFixed(SYMBOLS_AFTER_COMA));
});

const secondaryPinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const someOffers = Array.from(createBookingsObject(QUANTITY_OF_OFFERS));



const addSecondaryPin = (map, locationX, locationY, offer) => {

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
    .addTo(map)
    .bindPopup(createPopup(offer));
};

someOffers.forEach(offer => {
  const {x, y} = offer.offer.location;
  addSecondaryPin(map, x, y, offer);
});