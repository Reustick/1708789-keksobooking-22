'use strict';
// источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min,max) {
  min=Math.ceil(min);
  max=Math.floor(max);
  return min>=0&&max>=0&&min<max? Math.floor(Math.random()*(max-min+1))+min:alert('Диапазон чисел не может быть отрицательным'); //Максимум и минимум включаются
}
getRandomIntInclusive(2,5);

const getRandomInRange = (min, max,simbolsAfterComma) => {

  return min>=0 && max>=0 && min<max ? ((Math.random() * (max - min + 1) + min).toFixed(simbolsAfterComma)) : alert('Диапазон чисел не может быть отрицательным');
}
getRandomInRange(1,2,3);