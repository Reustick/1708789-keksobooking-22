// Функция генерирующая объекты для бронирования
import { getArrayRandomLength, getRandomInteger, getRandomIntInclusive } from './util.js';
import { RANDOM_COORDINATES, TYPES, CHECKINS, CHECKOUTS, QUALITIES, HOTELS_PHOTO, QUANTITY_OF_OFFERS } from './const.js';
const getBookingsObject = () => {
  
  return {
    author: {
      avatar: `img/avatars/user0${getRandomIntInclusive(1,8)}.png`,
    },
    offer: {
      title: 'Выгодное предложение',
      address: `${RANDOM_COORDINATES.x}, ${RANDOM_COORDINATES.y}`,
      price: getRandomInteger(),
      type: TYPES[getRandomIntInclusive(0,TYPES.length-1)],
      rooms: getRandomInteger(),
      guests: getRandomInteger(),
      checkin: CHECKINS[getRandomIntInclusive(0,CHECKINS.length-1)],
      checkout: CHECKOUTS[getRandomIntInclusive(0,CHECKOUTS.length-1)],
      features: getArrayRandomLength(QUALITIES),
      description: 'Уютная комната для того, чтобы провести пркрасный вечер',
      photos: getArrayRandomLength(HOTELS_PHOTO),
    },
    location: {
      RANDOM_COORDINATES,
    },
  };
};
const createBookingsObject = (QUANTITY_OF_OFFERS) => {
  const bookingsObject = new Array(QUANTITY_OF_OFFERS).fill(null).map(() => getBookingsObject());
  return bookingsObject;
};
// alert(bookingsObject);
 
export { createBookingsObject };