import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Apartment} from "../apartment/apartment.jsx";

export class CardsList extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };
    this._setActiveCard = this._setActiveCard.bind(this);
  }
  setActiveCard(id) {
    this.setState({
      activeCard: id
    });
  }
  render() {
    const {offers, onHeaderButtonClick} = this.props;

    return offers.map((offer) =>
      <Apartment
        key={offer.id}
        offer={offer}
        onHeaderButtonClick={onHeaderButtonClick}
        onCardHover={this._setActiveCard}
      />
    );
  }
}
CardsList.propTypes = {
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
};
