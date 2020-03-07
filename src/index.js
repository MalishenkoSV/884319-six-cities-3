import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {offersMock, OFFERS_COUNT} from "./mock/offers.js";

const HEADER_HOVER_CARD_HANDLER = () => {};
const onCityClick = () => {};
ReactDOM.render(
    <App
      countPlaces={OFFERS_COUNT} offers={offersMock} onMouseEnter={HEADER_HOVER_CARD_HANDLER} onCityClick={onCityClick}
    />,
    document.querySelector(`#root`)
);
