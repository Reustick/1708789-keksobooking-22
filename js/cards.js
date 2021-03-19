import { getBookingsObject } from './data.js';
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
    default:
      return 'Выберите тип жилья';  
  }
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
const createPopup = (offer) => {
  const cardElement = document.querySelector('#card').content.querySelector('.popup').cloneNode(true);
  // загаловок
  cardElement.querySelector('.popup__title').textContent = offer.offer.title;
  // адрес
  cardElement.querySelector('.popup__text--address').textContent = offer.offer.address;
  // цена
  cardElement.querySelector('.popup__text--price').textContent = `${offer.offer.price} ₽/ночь`;
  // тип жилья
  cardElement.querySelector('.popup__type').textContent = transformType(offer.type);
  // количество комнат и гостей 
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms} комнаты для ${offer.offer.guests} гостей`;
  // время заезда и выезда
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.offer.checkin}, выезд до ${offer.offer.checkout}`;
  // удобства
  cardElement.querySelector('.popup__features').textContent = offer.offer.features;
  // Описание недвижимости
  cardElement.querySelector('.popup__description').textContent = offer.offer.description;
  // фото
  generatePhoto(cardElement,offer.offer.photos);
  // аватар
  cardElement.querySelector('.popup__avatar').src = offer.author.avatar;
  return cardElement;
}
const offer = getBookingsObject();
const card = createPopup(offer);
const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.appendChild(card);