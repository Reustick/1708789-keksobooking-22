const URL = 'https://22.javascript.pages.academy/keksobooking';
const PRICE = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};
const START_COORDINATES = {
  lat: 35.6729,
  lng: 139.7564,
};
const SYMBOLS_AFTER_COMA = 5;
const QUANTITY_OF_OFFERS = 10;
const MAP_IMAGES_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const MAP_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const MAP_ZOOM = 10;
const ANY = 'any';
const RERENDER_DELAY = 500;
const PRICE_LIMIT = {
  minPrice: 10000,
  maxPrice: 50000,
};
const PRICE_RANK = {
  low: 'low',
  middle: 'middle',
  high: 'high',
};
const NUMBER_ROOMS = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};
export { PRICE, START_COORDINATES,
  SYMBOLS_AFTER_COMA, QUANTITY_OF_OFFERS, MAP_IMAGES_URL,
  MAP_ATTRIBUTION, MAP_ZOOM, URL,
  RERENDER_DELAY, ANY, PRICE_LIMIT,
  PRICE_RANK, NUMBER_ROOMS };