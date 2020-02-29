import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {offers, OFFERS_COUNT} from "./mock/offers.js";


ReactDOM.render(
    <App
      countPlaces={OFFERS_COUNT} offers={offers}
    />,
    document.querySelector(`#root`)
);
