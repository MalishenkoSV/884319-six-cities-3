import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const onCardHover = () => {};
const App = (props) => {
  const {countPlaces, offers, cities, onHeaderButtonClick} = props;

  return (
    <Main countPlaces={countPlaces} offers={offers} cities={cities} onCardHover={onCardHover} onHeaderButtonClick={onHeaderButtonClick}/>
  );
};

App.propTypes = {
  countPlaces: PropTypes.number.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onCardHover: PropTypes.func.isRequired,
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
