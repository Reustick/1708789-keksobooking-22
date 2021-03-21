const PRICE = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};
const form = document.querySelector('.ad-form');
const housingType = form.querySelector('#type');
const housingPrice = form.querySelector('#price');
const checkinSelect = form.querySelector('#timein');
const checkoutSelect = form.querySelector('#timeout');

const transformTypeToPrice = (type) => {
  switch (type) {
    case 'flat':
      return PRICE.flat;
    case 'bungalow':
      return PRICE.bungalow;
    case 'house':
      return PRICE.house;
    case 'palace':
      return PRICE.palace;
    default:
      return 'Выберите подходящую цену';  
  }
};
const setPrice = () => {
  housingPrice.placeholder = transformTypeToPrice(housingType.value);
  housingPrice.min = transformTypeToPrice(housingType.value);
};
housingType.addEventListener('change', () => {
  setPrice();
});
checkinSelect.addEventListener('change', () => {
  checkoutSelect.value = checkinSelect.value
});
checkoutSelect.addEventListener('change', () => {
  checkinSelect.value = checkoutSelect.value
});