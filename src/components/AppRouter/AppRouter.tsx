import React from 'react';
import Header from '../Header/Header';
import MainPage from '../../pages/MainPage/MainPage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../Layout/Layout";
import {CardsCityProps} from "../../types/commonTypes";

interface AppRouterProps {
  cardsMain: CardsCityProps[];
  cardsFavorites: CardsCityProps[];
  cardsAnotherCity: CardsCityProps[];
}


const AppRouter: React.FC<AppRouterProps> = ({cardsMain, cardsFavorites, cardsAnotherCity}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage cards={cardsMain} />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
