import React from "react";
import renderer from 'react-test-renderer';
import {Apartment} from "./apartment.jsx";

export const TEST_OFFER = {
  id: 1,
  type: `apartment`,
  price: 80,
  title: `Wood and stone place`,
  isPremium: true,
  isFavourite: false,
  rating: 4,
  photoSrc: `img/apartment-01.jpg`
};


it(`Should Apartment render correctly`, () => {
  const onCardHover = jest.fn();
  const onHeaderButtonClick = jest.fn();
  const onMouseLeave = jest.fn();
  const tree = renderer
    .create(<Apartment
      offer={TEST_OFFER}
      onHeaderButtonClick={onHeaderButtonClick}
      onCardHover={onCardHover}
      onMouseLeave={onMouseLeave}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
