import React from "react";
import PropTypes from "prop-types";
import {CardsList} from "../cards-list/cards-list.jsx";
import {CitiesList} from "../cities-list/cities-list.jsx";

const Main = ({countPlaces, offers, cities, onHeaderButtonClick, onCityClick}) => {
  return <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {<CitiesList cities={cities} onCityClick={onCityClick}/>}
        </ul>
      </section>
    </div>
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{countPlaces} places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex="0">
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex="0">Popular</li>
              <li className="places__option" tabIndex="0">Price: low to high</li>
              <li className="places__option" tabIndex="0">Price: high to low</li>
              <li className="places__option" tabIndex="0">Top rated first</li>
            </ul>
            <select className="places__sorting-type" id="places-sorting">
              <option className="places__option" value="popular">Popular</option>
              <option className="places__option" value="to-high">Price: low to high</option>
              <option className="places__option" value="to-low">Price: high to low</option>
              <option className="places__option" value="top-rated">Top rated first</option>
            </select>
          </form>
          <div className="cities__places-list places__list tabs__content">
            <CardsList offers={offers} onHeaderButtonClick={onHeaderButtonClick} />
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"></section>
        </div>
      </div>
    </div>
  </main>;
};
Main.propTypes = {
  countPlaces: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavourite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    photoSrc: PropTypes.string.isRequired,
  })).isRequired,
  onHeaderButtonClick: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Main;
