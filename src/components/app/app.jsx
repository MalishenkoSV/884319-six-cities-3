import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {countPlaces, offers, onHeaderButtonClick} = props;

  return (
    <Main countPlaces={countPlaces} offers={offers} onHeaderButtonClick={onHeaderButtonClick}/>
  );
};

App.propTypes = {
  countPlaces: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onHeaderButtonClick: PropTypes.func.isRequired
};
export default App;
