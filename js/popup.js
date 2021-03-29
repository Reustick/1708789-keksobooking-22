import { isEscEvent } from './util.js';

const showPopupAlert = (message, type) => {
  const alertTemplate = document.querySelector(`#${type}`).content.querySelector(`.${type}`);
  const alertElement = alertTemplate.cloneNode(true);
  const alertText = alertElement.querySelector(`.${type}__message`);
  const onPopupEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closePopup();
    }
  };
  const closePopup = () => {
    alertElement.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscKeydown);
  };
  document.addEventListener('keydown', onPopupEscKeydown);
  alertElement.addEventListener('click', () => {
    closePopup();
  });
  alertElement.style.zIndex = 1000;
  alertText.textContent = message;
  document.body.append(alertElement);
};

export { showPopupAlert };