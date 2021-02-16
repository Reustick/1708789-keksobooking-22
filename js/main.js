"use strict";
// источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomInRange = (min, max,simbolsAfterComma) => {

return min>=0 && max>=0 ? ((Math.random() * (max - min + 1) + min).toFixed(simbolsAfterComma)) : console.log('Диапазон чисел не может быть отрицательным');
}
console.log(getRandomInRange(1,2,3));
