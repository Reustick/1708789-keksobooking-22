const setDisabledForElements = (elements, state) => {
  Array.from(elements).forEach((element) => {
    element.disabled = state;
  });
};

const disableForm = (state) => {
  const adForm = document.querySelector('.ad-form');
  const adFormFieldsets = document.querySelectorAll('fieldset');
  const filtersForm = document.querySelector('.map__filters');
  const filtersFormSelects = filtersForm.querySelectorAll('.map__filter');
  const filtersFormFeatures = filtersForm.querySelector('.map__features');

  if (!state) {
    adForm.classList.toggle('ad-form--disabled');
    filtersForm.classList.toggle('map__filters--disabled');
  } else {
    adForm.classList.toggle('ad-form--disabled');
    filtersForm.classList.toggle('map__filters--disabled');
  }

  setDisabledForElements(adFormFieldsets, state);
  setDisabledForElements(filtersFormSelects, state);
  filtersFormFeatures.disabled = state;
};
export {disableForm};