import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const TEST_OFFERS_COUNT = 312;
export const TEST_OFFERS = [
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
    price: 20,
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
const TEST_HEADER_CLICK_HANDLER = () => {};

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(<App
      countPlaces={TEST_OFFERS_COUNT}
      offers={TEST_OFFERS}
      onHeaderButtonClick={TEST_HEADER_CLICK_HANDLER}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

