import React, {Fragment} from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {CardCity, City, Point, Points} from "../../types/types";
import MainPage from '../../pages/MainPage/MainPage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import Layout from "../Layout/Layout";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import LoginPage from "../../pages/LoginPage/LoginPage";
import Room from "../../pages/Room/Room";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

interface AppRouterProps {
  selectedPoint: Point | undefined;
  handleCardHover: (point: Point | undefined) => void;
  cardsList: CardCity[];
  city: City;
}

const AppRouter = (props: AppRouterProps): JSX.Element => {

  return (
    <BrowserRouter>
      <ScrollToTop/>

      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage selectedPoint={props.selectedPoint} handleCardHover={props.handleCardHover} city={props.city} cardsList={props.cardsList}/>}/>

          <Route path='favorites'
                 element={
                   <PrivateRoute>
                     <FavoritesPage
                       cardsList={props.cardsList}/>
                   </PrivateRoute>
                 }/>

          <Route path='offer'>
            <Route path=':id' element={<Room selectedPoint={props.selectedPoint} handleCardHover={props.handleCardHover} city={props.city} cardsList={props.cardsList}/>}/>
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
