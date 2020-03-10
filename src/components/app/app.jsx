import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Property} from "../property/property.jsx";
import {offersMock} from "../../mock/offers.js";

const onHeaderButtonClick = () => {};
const HEADER_HOVER_CARD_HANDLER = () => {};
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null
    };

    this.onHeaderButtonClick = this.onHeaderButtonClick.bind(this);
  }

  onHeaderButtonClick(id) {
    this.setState({
      activeCard: id
    });
  }

  renderApp() {
    const {countPlaces, onCityClick, cities} = this.props;
    const {activeCard} = this.state;

    if (activeCard < 0) {
      return (
        <Main
          countPlaces={countPlaces}
          offers={offersMock}
          onHeaderButtonClick={onHeaderButtonClick}
          onCityClick={onCityClick}
          cities={cities}
          onMouseEnter={HEADER_HOVER_CARD_HANDLER}
        />
      );
    }
    if (activeCard >= 0) {
      return (
        <Property offer={offersMock[activeCard - 1]} />
      );
    }

    return null;
  }

  render() {
    const offer = offersMock[0];
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderApp()}
          </Route>
          <Route exact path="/offer">
            <Property offer={offer}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

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
