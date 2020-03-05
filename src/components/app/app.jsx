import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Property from "../property/property.jsx";
import {offersMock} from "../../mock/offers.js";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.onHeaderButtonClick = this.onHeaderButtonClick.bind(this);

    this.state = {
      value: offersMock[0]
    };
  }

  renderApp() {
    const {offers} = this.props;
    return (
      <Main offers={offers}
        onHeaderButtonClick={this.onHeaderButtonClick}
        countPlaces={this.props.countPlaces}
        cities={this.props.cities}
        onCityClick={this.props.onCityClick}/>
    );
  }

  renderProperty() {
    const offer = this.state.value;

    if (offer !== null) {
      return (
        <Property offer={offer} />
      );
    }
    return this.renderApp();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            {this.renderProperty()}
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
