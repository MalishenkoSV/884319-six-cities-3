import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {offers, OFFERS_COUNT} from "./mock/offers.js";

const HEADER_HOVER_CARD_HANDLER = () => {};
const onHeaderButtonClick = () => {};
const onCityClick = () => {};
ReactDOM.render(
    <App
      countPlaces={OFFERS_COUNT} offers={offers} onMouseEnter={HEADER_HOVER_CARD_HANDLER} onHeaderButtonClick={onHeaderButtonClick} onCityClick={onCityClick}
    />,
    document.querySelector(`#root`)
);
