import {CardsCityProps} from "../../types/commonTypes";
import AppRouter from "../AppRouter/AppRouter";

interface AppProps {
  cardsMain: CardsCityProps[];
  cardsFavorites: CardsCityProps[];
  cardsFavoritesAnotherCity: CardsCityProps[];
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
