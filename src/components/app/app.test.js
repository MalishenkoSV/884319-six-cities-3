import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {Data} from "../../data/data.js";

const TEST_HEADER_CLICK_HANDLER = () => {};

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(<App
      countPlaces={Data.COUNT_PLACES}
      offers={Data.OFFERS}
      onHeaderButtonClick={TEST_HEADER_CLICK_HANDLER}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

