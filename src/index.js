import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mock/offers.js";


const OFFERS_COUNT = 312;
const TEST_CARD_HOVER_HANDLER = () => {};
ReactDOM.render(
    <App
      countPlaces={OFFERS_COUNT} offers={offers} onCardHover={TEST_CARD_HOVER_HANDLER}
    />,
    document.querySelector(`#root`)
);
