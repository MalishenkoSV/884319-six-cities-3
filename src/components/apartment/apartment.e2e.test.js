import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Apartment} from "./apartment";

export const TEST_OFFER = {
  type: `apartment`,
  price: 80,
  title: `Wood and stone place`,
  isPremium: true,
  isFavourite: false,
  rating: 4,
  photoSrc: `img/apartment-01.jpg`
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Card should be  clicked`, () => {
  const onCardHover = jest.fn();
  const onHeaderButtonClick = jest.fn();
  const placeCard = shallow(
      <Apartment
        offer={TEST_OFFER}
        onCardHover={onCardHover}
        onHeaderButtonClick={onHeaderButtonClick}
      />
  );
  const card = placeCard.find(`.place-card`);
  card.props().onMouseOver();
  expect(onHeaderButtonClick.mock.calls.length).toBe(1);
  expect(onCardHover.mock.calls.length).toBe(1);
});
