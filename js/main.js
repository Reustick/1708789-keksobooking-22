'use strict';
// источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const QUANTITY_BOOKINGS_OBJECT = 10;
// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomIntInclusive = (min,max) => {
  min=Math.ceil(min);
  max=Math.floor(max);
  return min>=0&&max>=0&&min<max? Math.floor(Math.random()*(max-min+1))+min:alert('Диапазон чисел не может быть отрицательным'); //Максимум и минимум включаются
}
getRandomIntInclusive(1,2);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
const getRandomInRange = (min, max,simbolsAfterComma) => {

  return min>=0 && max>=0 && min<max ? ((Math.random() * (max - min + 1) + min).toFixed(simbolsAfterComma)) : alert('Диапазон чисел не может быть отрицательным');
}
getRandomInRange(1,2,2);

// Функция генерирующая случайное число для поля цены и количества комнат
const getRandomInteger = () => {
  return Math.floor(Math.random() * 1000 + 1000);
}
getRandomInteger();

// Функция, которая создает массив сулчайной длинны для поля features и photos
const getArrayRandomLength = (count) => {
  let variables = getRandomIntInclusive(1, count.length);
  let newArr = [];
  for (let i=0; i<variables; i++) {
    newArr.push(count[i])
  }
  return newArr;
};
// Функция генерирующая объекты для бронирования
function getBookingsObject() {
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
}

// Создаем пустой массив куда будут генерироваться случайные элементы объекта
const bookingsObject = new Array(QUANTITY_BOOKINGS_OBJECT).fill(null).map(() => getBookingsObject());
alert(bookingsObject);