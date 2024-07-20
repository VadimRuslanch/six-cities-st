import React from 'react';
import FavoritesCard from '../../components/FavoritesCard/FavoritesCard';
import {CardCity} from "../../types/types";

interface FavoritesPageProps {
  cardsList: CardCity[];
}

const FavoritesPage = ({cardsList}: FavoritesPageProps) => {
  const [activeCard, setActiveCard] = React.useState(false);
  const handleActiveCard = () => {

  }
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {cardsList.map((card: CardCity) => (
                  <FavoritesCard
                    key={card.id}
                    id={card.id}
                    imgPath={card.imgPath}
                    price={card.price}
                    name={card.name}
                    type={card.type}
                    mark={card.mark}
                    lat={card.lat}
                    lng={card.lng}
                  />
                ))}
              </div>
            </li>

            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Cologne</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {cardsList.map((card: CardCity) => (
                  <FavoritesCard
                    key={card.id}
                    id={card.id}
                    imgPath={card.imgPath}
                    price={card.price}
                    name={card.name}
                    type={card.type}
                    mark={card.mark}
                    lat={card.lat}
                    lng={card.lng}
                  />
                ))}
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesPage;
