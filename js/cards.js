const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const hideEmptyBlock = (element, block, parent) => {
  if (element === '' || element === null || element === []) {
    parent.removeChild(parent.querySelector(block));
  }
};

const hideAllEmptyBlocksInCard = ({ author, offer }, parent) => {
  hideEmptyBlock(author.avatar, '.popup__avatar', parent);
  hideEmptyBlock(offer.title, '.popup__title', parent);
  hideEmptyBlock(offer.address, '.popup__text--address', parent);
  hideEmptyBlock(offer.price, '.popup__text--price', parent);
  hideEmptyBlock(offer.rooms, '.popup__text--capacity', parent);
  hideEmptyBlock(offer.guests, '.popup__text--capacity', parent);
  hideEmptyBlock(offer.type, '.popup__type', parent);
  hideEmptyBlock(offer.checkin, '.popup__text--time', parent);
  hideEmptyBlock(offer.checkout, '.popup__text--time', parent);
  hideEmptyBlock(offer.features, '.popup__features', parent);
  hideEmptyBlock(offer.description, '.popup__description', parent);
  hideEmptyBlock(offer.photos, '.popup__photos', parent);
};
const generateFeaturesList = (parent, features) => {
  const featuresList = parent.querySelector('.popup__features');
  featuresList.innerHTML = '';
  features.forEach((element) => {
    const featureItem = document.createElement('li');
    featuresList.appendChild(featureItem).classList.add('popup__feature', `popup__feature--${element}`);
  });
};

const generatePhoto = (parent, photosUrl) => {
  const photoList = parent.querySelector('.popup__photos');
  const photoItem = photoList.querySelector('.popup__photo');
  photoList.removeChild(photoItem);
  photosUrl.forEach((element) => {
    const newPhoto = photoItem.cloneNode(true);
    photoList.appendChild(newPhoto).src = element;
  });
};

const transformType = (type) => {
  switch (type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
  }
};
const insideCard = ({ author, offer }, parent) => {
  parent.querySelector('.popup__avatar').src = author.avatar;
  parent.querySelector('.popup__title').textContent = offer.title;
  parent.querySelector('.popup__text--address').textContent = offer.address;
  parent.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  parent.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  parent.querySelector('.popup__type').textContent = transformType(offer.type);
  parent.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  generateFeaturesList(parent, offer.features);
  parent.querySelector('.popup__description').textContent = offer.description;
  generatePhoto(parent, offer.photos);
};

const createPopupCard = (cardData) => {
  const cardElement = cardTemplate.cloneNode(true);
  insideCard(cardData, cardElement);
  hideAllEmptyBlocksInCard(cardData, cardElement);
  return cardElement;
};

export { createPopupCard };