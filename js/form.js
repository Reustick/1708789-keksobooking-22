import { PRICE, NUMBER_ROOMS } from './const.js';
import { returnMainPin, setSecondaryPin } from './map.js';
import { showPopupAlert } from './popup.js';
import { sendData } from './api.js';

const form = document.querySelector('.ad-form');
const filterForm = document.querySelector('.map__filters');
const housingType = form.querySelector('#type');
const housingPrice = form.querySelector('#price');
const checkinSelect = form.querySelector('#timein');
const checkoutSelect = form.querySelector('#timeout');
const roomsNumber = form.querySelector('#room_number');
const capacity =  form.querySelector('#capacity');

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
  }
};

const resetForm = () => {
  form.reset();
  filterForm.reset();
  returnMainPin();
  setSecondaryPin();
}

const setPrice = () => {
  housingPrice.placeholder = transformTypeToPrice(housingType.value);
  housingPrice.min = transformTypeToPrice(housingType.value);
};

const changeCapacityOptions = (guestNumber) => {
  const capacityOptions = capacity.querySelectorAll('option');

  capacityOptions.forEach(element => {
    element.disabled = true;
  });

  NUMBER_ROOMS[guestNumber].forEach(element => {
    capacityOptions.forEach((option) => {
      if (Number(option.value) === element) {
        option.disabled = false;
        option.selected = true;
      }
    });
  });
};

const setFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => {
        showPopupAlert('Данные отправлены', 'success');
        resetForm();
      },
      () => showPopupAlert('Не удалось отправить данные. Попробуйте ещё раз', 'error'),
      new FormData(evt.target),
    )
  });
}

const setFormReset = () => {
  const buttonReset = form.querySelector('.ad-form__reset');

  buttonReset.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetForm();
  })
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

roomsNumber.addEventListener('change', () => {
  changeCapacityOptions(roomsNumber.value);
});

setPrice();
changeCapacityOptions(roomsNumber.value);
setFormSubmit();
setFormReset();