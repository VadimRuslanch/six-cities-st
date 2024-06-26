import React from 'react';
import FavoritesCard from '../../components/FavoritesCard/FavoritesCard';

interface FavoritesPageProps {
  id: number;
  imgPath: string;
  count: number;
  name: string;
  type: string;
  mark?: string;
}

interface FavoritesPagePropsArray {
  cards: FavoritesPageProps[];
  cardsAnotherCity: FavoritesPageProps[];
}

const FavoritesPage: React.FC<FavoritesPagePropsArray> = ({cards, cardsAnotherCity}) => (
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
              {cards.map((card: FavoritesPageProps) => (
                <FavoritesCard
                  key={card.id}
                  imgPath={card.imgPath}
                  count={card.count}
                  name={card.name}
                  type={card.type}
                  mark={card.mark}
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
              {cardsAnotherCity.map((card: FavoritesPageProps) => (
                <FavoritesCard
                  key={card.id}
                  imgPath={card.imgPath}
                  count={card.count}
                  name={card.name}
                  type={card.type}
                  mark={card.mark}
                />
              ))}
            </div>
          </li>
        </ul>
      </section>
    </div>
  </main>
);

export default FavoritesPage;
