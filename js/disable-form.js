const setDisabledForElements = (elements, state) => {
  Array.from(elements).forEach((element) => {
    element.disabled = state;
  });
};

const DisableForm = (state) => {
  const adForm = document.querySelector('.ad-form');
  const adFormFieldsets = document.querySelector('fieldset');
  const filtersForm = document.querySelector('.map__filters');
  const filtersFormSelects = filtersForm.querySelector('.map__filter');
  const filtersFormFeatures = filtersForm.querySelector('.map__features');

  if (!state) {
    adForm.classList.remove('ad-form--disabled');
    filtersForm.classList.remove('map__filters--disabled');
  } else {
    adForm.classList.add('ad-form--disabled');
    filtersForm.classList.add('map__filters--disabled');
  }

  setDisabledForElements(adFormFieldsets, state);
  setDisabledForElements(filtersFormSelects, state);
  filtersFormFeatures.disabled = state;
};
export {DisableForm};