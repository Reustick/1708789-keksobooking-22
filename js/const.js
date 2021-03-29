import { getRandomInRange } from './util.js';
const URL = 'https://22.javascript.pages.academy/keksobooking';
const PRICE = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};
const RANDOM_COORDINATES = {
  x: getRandomInRange(35.65,35.7,5),
  y: getRandomInRange(139.7,139.8,5),
};
const START_COORDINATES = {
  lat: 35.6729,
  lng: 139.7564,
};
const TYPES = ['palace','flat','house','bungalow'];
const CHECKINS = ['12:00','13:00','14:00'];
const CHECKOUTS = ['12:00','13:00','14:00'];
const QUALITIES = ['wifi','dishwasher','parking','washer','elevator','conditioner'];
const HOTELS_PHOTO = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const SYMBOLS_AFTER_COMA = 5;
const QUANTITY_OF_OFFERS = 10;
const MAP_IMAGES_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const MAP_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const MAP_ZOOM = 10;


export {PRICE, RANDOM_COORDINATES, START_COORDINATES,
  TYPES, CHECKINS, CHECKOUTS,
  QUALITIES, HOTELS_PHOTO, SYMBOLS_AFTER_COMA,
  QUANTITY_OF_OFFERS, MAP_IMAGES_URL, MAP_ATTRIBUTION,
  MAP_ZOOM, URL};