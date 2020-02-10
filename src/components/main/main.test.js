import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {Data} from "../../data/data.js";

const TEST_HEADER_CLICK_HANDLER = () => {};
it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      countPlaces={Data.COUNT_PLACES}
      offers={Data.OFFERS}
      onHeaderButtonClick={TEST_HEADER_CLICK_HANDLER}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
