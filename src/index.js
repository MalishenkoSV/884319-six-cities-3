import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mock/offers.js";


const OFFERS_COUNT = 312;
const TEST_CARD_HOVER_HANDLER = () => {};
const HEADER_BUTTON_CLICK_HANDLER = () => {};
ReactDOM.render(
    <App
      countPlaces={OFFERS_COUNT} offers={offers} onCardHover={TEST_CARD_HOVER_HANDLER} onHeaderButtonClick={HEADER_BUTTON_CLICK_HANDLER}
    />,
    document.querySelector(`#root`)
);
