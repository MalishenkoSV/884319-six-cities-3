import React from "react";
import renderer from 'react-test-renderer';
import {CardsList} from "./cards-list";

export const OFFERS_TEST = [
  {
    type: `apartment`,
    price: 120,
    title: `Wood and stone place`,
    isPremium: true,
    isFavourite: false,
    rating: 4,
    photoSrc: `img/apartment-01.jpg`
  },
  {
    type: `room`,
    price: 50,
    title: `Your perfect room`,
    isPremium: false,
    isFavourite: true,
    rating: 4.5,
    photoSrc: `img/apartment-02.jpg`
  },
  {
    type: `house`,
    price: 220,
    title: `The best house ever`,
    isPremium: false,
    isFavourite: false,
    rating: 5,
    photoSrc: `img/apartment-03.jpg`
  },
  {
    type: `hotel`,
    price: 100,
    title: `Hotel, not hostel`,
    isPremium: true,
    isFavourite: false,
    rating: 4.8,
    photoSrc: `img/apartment-01.jpg`
  }
];


const HEADER_BUTTON_CLICK_HANDLER = () => {};
it(`Should CardsList render correctly`, () => {
  const tree = renderer
    .create(<CardsList
      offers={OFFERS_TEST}
      onHeaderButtonClick={HEADER_BUTTON_CLICK_HANDLER}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
