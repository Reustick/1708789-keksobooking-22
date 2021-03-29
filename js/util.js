const ALERT_SHOW_TIME = 5000;
const ESCAPE = 'Escape';
const isEscEvent = (evt) => {
  return evt.key === ESCAPE;
};
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.classList.add('error-alert');
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { isEscEvent, showAlert };