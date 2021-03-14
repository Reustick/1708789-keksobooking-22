// Функция, возвращающая случайное целое число из переданного диапазона включительно
// источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
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
export {getArrayRandomLength, getRandomInteger, getRandomInRange, getRandomIntInclusive};