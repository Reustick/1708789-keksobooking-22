import { createBookingsObject } from './data.js';
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
    default:
      return 'Выберите тип жилья';  
  }
};
const createPopup = (offer) => {
  const cardElement = document.querySelector('#card').content.querySelector('.popup').cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = offer.offer.title;                                                                    // загаловок
  cardElement.querySelector('.popup__text--address').textContent = offer.offer.address;                                                         // адрес
  cardElement.querySelector('.popup__text--price').textContent = `${offer.offer.price} ₽/ночь`;                                                // цена
  cardElement.querySelector('.popup__type').textContent = transformType(offer.type);                                                          // тип жилья
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms} комнаты для ${offer.offer.guests} гостей`;         // количество комнат и гостей 
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.offer.checkin}, выезд до ${offer.offer.checkout}`;     // время заезда и выезда
  cardElement.querySelector('.popup__features').textContent = offer.offer.features;                                                        // удобства
  cardElement.querySelector('.popup__description').textContent = offer.offer.description;                                                 // Описание недвижимости
  generatePhoto(cardElement,offer.offer.photos);                                                                                         // фото
  cardElement.querySelector('.popup__avatar').src = offer.author.avatar;                                                                // аватар
  return cardElement;
}
export { createPopup };