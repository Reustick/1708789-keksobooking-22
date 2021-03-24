/* global L:readonly */
import { DisableForm } from './disable-form.js';

const addressField = document.querySelector('#address');
const startCoordinates = {
  lat: 35.6729,
  lng: 139.7564,
  toString() {
    return `Координата x: ${this.lat} Координата y: ${this.lng}`;
  },
};



console.log('fasfsa' + startCoordinates);


const map = L.map('map-canvas')
  .on('load', () => {
    DisableForm(false);
    console.log('карта инициализирована');
  })
  .setView({
    lat: startCoordinates.lat,
    lng: startCoordinates.lng,
  }, 16);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: startCoordinates.lat,
    lng: startCoordinates.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
  
mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  evt.target.getLatLng()
});
addressField.value = startCoordinates;