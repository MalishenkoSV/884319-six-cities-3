import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  PLACES_COUNT: 312
};
const OFFERS = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Modern apartment`, `Something cool`];
ReactDOM.render(
    <App
      countPlaces={Settings.PLACES_COUNT} offers={OFFERS}
    />,
    document.querySelector(`#root`)
);
