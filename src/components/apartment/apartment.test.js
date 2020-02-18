import React from "react";
import renderer from 'react-test-renderer';
import {Apartment} from "./apartment.jsx";

export const TEST_OFFER = {
  type: `apartment`,
  price: 80,
  title: `Wood and stone place`,
  isPremium: true,
  isFavourite: false,
  rating: 4,
  photoSrc: `img/apartment-01.jpg`
};

const TEST_CARD_HOVER_HANDLER = () => {};
it(`Should App render correctly`, () => {
  const tree = renderer
    .create(<Apartment
      offer={TEST_OFFER}
      onCardHover={TEST_CARD_HOVER_HANDLER}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
