import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";


const TEST_OFFERS_COUNT = 312;
export const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
export const TEST_OFFERS = [
  {
    id: 1,
    type: `apartment`,
    price: 120,
    title: `Wood and stone place`,
    isPremium: true,
    isFavourite: false,
    rating: 4,
    photoSrc: `img/apartment-01.jpg`
  },
  {
    id: 2,
    type: `room`,
    price: 20,
    title: `Your perfect room`,
    isPremium: false,
    isFavourite: true,
    rating: 4.5,
    photoSrc: `img/apartment-02.jpg`
  },
  {
    id: 3,
    type: `house`,
    price: 220,
    title: `The best house ever`,
    isPremium: false,
    isFavourite: false,
    rating: 5,
    photoSrc: `img/apartment-03.jpg`
  },
  {
    id: 4,
    type: `hotel`,
    price: 100,
    title: `Hotel, not hostel`,
    isPremium: true,
    isFavourite: false,
    rating: 4.8,
    photoSrc: `img/apartment-01.jpg`
  }
];

it(`Should Main render correctly`, () => {
  const onHeaderButtonClick = jest.fn();
  const onCityClick = jest.fn();
  const tree = renderer
    .create(<Main
      countPlaces={TEST_OFFERS_COUNT}
      offers={TEST_OFFERS}
      onHeaderButtonClick={onHeaderButtonClick}
      onCityClick={onCityClick}
      cities={CITIES}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
