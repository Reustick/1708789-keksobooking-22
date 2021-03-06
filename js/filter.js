/* global _:readonly */
import { ANY, RERENDER_DELAY, PRICE_LIMIT, PRICE_RANK } from './const.js';
import { getData } from './api.js';
import { showAlert } from './util.js';

const filterForm = document.querySelector('.map__filters');
const filterHousingType = filterForm.querySelector('#housing-type');
const filterHousingPrice = filterForm.querySelector('#housing-price');
const filterHousingRoom = filterForm.querySelector('#housing-rooms');
const filterHousingGuest = filterForm.querySelector('#housing-guests');

const filterByTypeHouse = ({offer}, type) => {
  return type === ANY || offer.type === type 
};

const filterByPrice = ({offer}, price) => {
  return (price === ANY) || (offer.price >= PRICE_LIMIT.minPrice && 
    offer.price <= PRICE_LIMIT.maxPrice && 
    price === PRICE_RANK.middle) || 
    (offer.price < PRICE_LIMIT.minPrice && 
    price === PRICE_RANK.low) || (offer.price > PRICE_LIMIT.maxPrice && 
    price === PRICE_RANK.high) 
};

const filterByRoom = ({offer}, room) => {
  return room === ANY || Number(offer.rooms) === Number(room)
};

const filterByGuest = ({offer}, guest) => {
  return guest === ANY || Number(offer.guests) === Number(guest)
};

const filterByFeatures = ({offer}) => {
  const filterHousingFeatures = filterForm.querySelectorAll('.map__checkbox:checked');
  return Array.from(filterHousingFeatures).every((feature) => {
    return offer.features.includes(feature.value);
  });
}

const filterAllOffers = (offers, quantity) => {
  const filteredOffers = [];
  for (let offer of offers) {
    if (filteredOffers.length === quantity) {
      return filteredOffers;
    } if ( filterByTypeHouse(offer, filterHousingType.value) && 
      filterByPrice(offer, filterHousingPrice.value) && 
      filterByRoom(offer, filterHousingRoom.value) && 
      filterByGuest(offer, filterHousingGuest.value) && 
      filterByFeatures(offer)) {
      filteredOffers.push(offer);
    }
  }
  return filteredOffers;
};

const filterOffers = (removePin, addPin, quantity) => {
  getData(
    (offers) => {
      filterForm.addEventListener('change', _.debounce( () => {
        removePin();
        addPin(filterAllOffers(offers, quantity));
      }, RERENDER_DELAY));
    },
    () => showAlert('Ошибка. Не удалось получить данные'),
  );
};

export { filterOffers };