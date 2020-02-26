import React from "react";
import PropTypes from "prop-types";
import CITIES from "../../mock/offers.js";

export const CitiesList = ({onCityClick}) => {

  const listOfCities = CITIES.map((city, index) =>
    <li className="locations__item" key={city}>
      <a className={index === 0 ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`} href="#" onClick={() => onCityClick(city)}>
        <span>{city}</span>
      </a>
    </li>
  );

  return (
    <ul className="locations__list tabs__list">
      {listOfCities}
    </ul>
  );
};

CitiesList.propTypes = {
  onCityClick: PropTypes.func.isRequired
};
