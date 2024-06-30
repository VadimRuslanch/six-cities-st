import React, {Fragment} from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {CardsCityProps} from "../../types/commonTypes";
import MainPage from '../../pages/MainPage/MainPage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import Layout from "../Layout/Layout";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import LoginPage from "../../pages/LoginPage/LoginPage";
import Room from "../../pages/Room/Room";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

interface AppRouterProps {
  cardsMain: CardsCityProps[];
  cardsFavorites: CardsCityProps[];
  cardsAnotherCity: CardsCityProps[];
}


const AppRouter: React.FC<AppRouterProps> = ({cardsMain, cardsFavorites, cardsAnotherCity}) => {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage cards={cardsMain}/>}/>

          <PrivateRoute>
            <Route path='favorites'
                   element={
                     <FavoritesPage
                       cards={cardsFavorites}
                       cardsAnotherCity={cardsAnotherCity}/>
                   }/>
          </PrivateRoute>

          <Route path='offer'>
            <Route index element={<Room/>}/>
            <Route path=':id' element={<Room/>}/>
          </Route>

          <Route path='login' element={<LoginPage/>}/>

          <Route path='*' element={
            <Fragment>
              <h1>
                404.
                <br/>
                <small>Page not found</small>
              </h1>
              <Link to="/">Go to main page</Link>
            </Fragment>
          }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
