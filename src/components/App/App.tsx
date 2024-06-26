import MainPage from '../../pages/MainPage/MainPage';
import React from 'react';
import Header from '../Header/Header';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';

interface AppProps {
  id: number;
  imgPath: string;
  count: number;
  name: string;
  type: string;
  class?: string;
}

interface MainPageProps {
  cardsMain: AppProps[];
  cardsFavorites: AppProps[];
  cardsFavoritesAnotherCity: AppProps[];
}

const App: React.FC<MainPageProps> = ({cardsMain, cardsFavorites, cardsFavoritesAnotherCity}) => (
  <>
    <Header/>
    <MainPage cards={cardsMain}/>
    <FavoritesPage cards={cardsFavorites} cardsAnotherCity={cardsFavoritesAnotherCity}/>
  </>
);

export default App;
