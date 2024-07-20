import React, {useState} from 'react';
import {CardCity, City, Points, Point} from "../../types/types";
import AppRouter from "../AppRouter/AppRouter";
import {city} from "../../mocks/offers";


interface AppProps {
  cardsList: CardCity[];
  city: City;
}



const App = (props: AppProps): JSX.Element => {
  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(undefined);
  const handleCardHover = (point: Point | undefined) => {
    setSelectedPoint(point);
  };
  return (
    <AppRouter selectedPoint={selectedPoint} handleCardHover={handleCardHover} city={city} cardsList={props.cardsList}
    />
  );
};

export default App;
