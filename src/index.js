import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  PLACES_COUNT: 312
};

ReactDOM.render(
    <App
      countPlaces={Settings.PLACES_COUNT}
    />,
    document.querySelector(`#root`)
);
