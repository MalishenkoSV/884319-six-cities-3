import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {Data} from "./data/data.js";

const HEADER_BUTTON_CLICK_HANDLER = () => {};
ReactDOM.render(
    <App
      countPlaces={Data.COUNT_PLACES} offers={Data.OFFERS} onHeaderButtonClick={HEADER_BUTTON_CLICK_HANDLER}
    />,
    document.querySelector(`#root`)
);
