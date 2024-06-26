import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';


interface AppProps {
  id: number;
  imgPath: string;
  count: number;
  name: string;
  type: string;
  mark?: string;
}

const cardsMain: AppProps[] = [
  {
    id: 1,
    imgPath: 'img/apartment-01.jpg',
    count: 120,
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment'
  },
  {
    id: 2,
    imgPath: 'img/room.jpg',
    count: 80,
    name: 'Wood and stone place',
    type: 'Private room'
  },
  {
    id: 3,
    imgPath: 'img/apartment-02.jpg',
    count: 132,
    name: 'Canal View Prinsengracht',
    type: 'Apartment'
  },
  {
    id: 4,
    imgPath: 'img/apartment-03.jpg',
    count: 180,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment'
  },
  {
    id: 5,
    imgPath: 'img/room.jpg',
    count: 80,
    name: 'Wood and stone place',
    type: 'Private room'
  }
];

const cardsFavorites: AppProps[] = [
  {
    id: 1,
    imgPath: 'img/apartment-01.jpg',
    count: 80,
    name: 'Wood and stone place',
    type: 'Apartment',
    mark: 'Premium'
  },
  {
    id: 2,
    imgPath: 'img/apartment-01.jpg',
    count: 80,
    name: 'Wood and stone place',
    type: 'Apartment'
  }
];

const cardsFavoritesAnotherCity: AppProps[] = [
  {
    id: 1,
    imgPath: 'img/apartment-01.jpg',
    count: 80,
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
