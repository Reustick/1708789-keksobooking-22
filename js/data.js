// Функция генерирующая объекты для бронирования
import { getArrayRandomLength, getRandomInteger, getRandomInRange, getRandomIntInclusive } from './util.js';
const getBookingsObject = () => {
  const locations={
    x: getRandomInRange(35.65,35.7,5),
    y: getRandomInRange(139.7,139.8,5),
  };
  const types=['palace','flat','house','bungalow'];
  const checkins=['12:00','13:00','14:00'];
  const checkouts=['12:00','13:00','14:00'];
  const qualities=['wifi','dishwasher','parking','washer','elevator','conditioner'];
  const hotelsPhoto=['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
  return {
    author: {
      avatar: `img/avatars/user0${getRandomIntInclusive(1,8)}.png`,
    },
    offer: {
      title: 'Выгодное предложение',
      address: `${locations.x}, ${locations.y}`,
      price: getRandomInteger(),
      type: types[getRandomIntInclusive(0,types.length-1)],
      rooms: getRandomInteger(),
      guests: getRandomInteger(),
      checkin: checkins[getRandomIntInclusive(0,checkins.length-1)],
      checkout: checkouts[getRandomIntInclusive(0,checkouts.length-1)],
      features: getArrayRandomLength(qualities),
      description: 'Уютная комната для того, чтобы провести пркрасный вечер',
      photos: getArrayRandomLength(hotelsPhoto),
    },
    location: {
      locations,
    },
  };
};
export {getBookingsObject};