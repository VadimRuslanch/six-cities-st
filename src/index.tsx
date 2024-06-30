import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import {CardCity} from "./types/commonTypes";

const cardsMain: CardCity[] = [
  {
    id: 1,
    imgPath: 'img/apartment-01.jpg',
    price: 120,
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment'
  },
  {
    id: 2,
    imgPath: 'img/room.jpg',
    price: 80,
    name: 'Wood and stone place',
    type: 'Private room'
  },
  {
    id: 3,
    imgPath: 'img/apartment-02.jpg',
    price: 132,
    name: 'Canal View Prinsengracht',
    type: 'Apartment'
  },
  {
    id: 4,
    imgPath: 'img/apartment-03.jpg',
    price: 180,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment'
  },
  {
    id: 5,
    imgPath: 'img/room.jpg',
    price: 80,
    name: 'Wood and stone place',
    type: 'Private room'
  }
];

const cardsFavorites: CardCity[] = [
  {
    id: 1,
    imgPath: 'img/apartment-01.jpg',
    price: 80,
    name: 'Wood and stone place',
    type: 'Apartment',
    mark: 'Premium'
  },
  {
    id: 2,
    imgPath: 'img/apartment-01.jpg',
    price: 80,
    name: 'Wood and stone place',
    type: 'Apartment'
  }
];

const cardsFavoritesAnotherCity: CardCity[] = [
  {
    id: 1,
    imgPath: 'img/apartment-01.jpg',
    price: 80,
    name: 'Wood and stone place',
    type: 'Apartment'
  }
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App cardsMain={cardsMain} cardsFavorites={cardsFavorites} cardsFavoritesAnotherCity={cardsFavoritesAnotherCity}/>
  </React.StrictMode>,
);
