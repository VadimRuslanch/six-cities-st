import {CardCity} from "../../types/commonTypes";
import AppRouter from "../AppRouter/AppRouter";
import React from "react";

interface AppProps {
  cardsMain: CardCity[];
  cardsFavorites: CardCity[];
  cardsFavoritesAnotherCity: CardCity[];
}

const App: React.FC<AppProps> = (
  {
    cardsMain,
    cardsFavorites,
    cardsFavoritesAnotherCity
  }) => (
  <AppRouter cardsMain={cardsMain}
             cardsFavorites={cardsFavorites}
             cardsAnotherCity={cardsFavoritesAnotherCity}
  />
);

export default App;
