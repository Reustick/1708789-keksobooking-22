import { URL } from './const.js';

const getData = (onSuccess, onFail) => {
  fetch(`${URL}/data`)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail();
    })
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    URL,
    {
      method: 'POST',
      credentials: 'same-origin',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Ошибка. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Ошибка. Попробуйте ещё раз');
    });
};

export { getData, sendData };