import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {countPlaces, offers, cities, onHeaderButtonClick, onCityClick, onMouseEnter} = props;

  return (
    <Main countPlaces={countPlaces} offers={offers} cities={cities} onMouseEnter={onMouseEnter} onHeaderButtonClick={onHeaderButtonClick} onCityClick={onCityClick}/>
  );
};

App.propTypes = {
  countPlaces: PropTypes.number.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onHeaderButtonClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavourite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    photoSrc: PropTypes.string.isRequired,
  })).isRequired
};
export default App;
