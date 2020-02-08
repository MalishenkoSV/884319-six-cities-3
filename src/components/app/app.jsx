import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {

  const {countPlaces, offers} = props;

  return (
    <Main countPlaces={countPlaces} offers={offers}/>
  );
};

App.propTypes = {
  countPlaces: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default App;
