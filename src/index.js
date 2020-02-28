import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {offers, OFFERS_COUNT} from "./mock/offers.js";

const TEST_CARD_HOVER_HANDLER = () => {};
const HEADER_BUTTON_CLICK_HANDLER = () => {};
ReactDOM.render(
    <App
      countPlaces={OFFERS_COUNT} offers={offers} onMouseEnter={TEST_CARD_HOVER_HANDLER} onHeaderButtonClick={HEADER_BUTTON_CLICK_HANDLER}
    />,
    document.querySelector(`#root`)
);
