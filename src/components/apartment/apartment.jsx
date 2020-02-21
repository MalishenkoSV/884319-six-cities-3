import React from "react";
import PropTypes from "prop-types";


export const Apartment = ({offer, onCardHover, onHeaderButtonClick}) => {
  const {type, price, id, title, isPremium, rating, photoSrc} = offer;
  const ratingPercentage = `${rating * 10}%`;
  const premiumClass = isPremium ? `place-card__mark` : `place-card__mark visually-hidden`;

  return (
    <article className="cities__place-card place-card" onMouseOver={() => (onCardHover(id))}>
      <div className={premiumClass}>
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={photoSrc} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingPercentage}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={onHeaderButtonClick}>
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type" style={{textTransform: `capitalize`}}>{type}</p>
      </div>
    </article>
  );
};

Apartment.propTypes = {
  offer: PropTypes.shape({
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavourite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    photoSrc: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onCardHover: PropTypes.func.isRequired,
  onHeaderButtonClick: PropTypes.func.isRequired,
};