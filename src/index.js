import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {offers} from "./mocks/offers";
import {Data} from "../../data/data.js";

const HEADER_BUTTON_CLICK_HANDLER = () => {};
ReactDOM.render(
    <App
      countPlaces={Data.COUNT_PLACES} offers={offers} onCardHover={HEADER_BUTTON_CLICK_HANDLER}
    />,
    document.querySelector(`#root`)
);
