import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Apartment} from "./apartment";

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
const onMouseLeave = () => {};
Enzyme.configure({
  adapter: new Adapter(),
});

it(`Card should be  clicked`, () => {
  const onCardHover = jest.fn();
  const onHeaderButtonClick = jest.fn();
  const onMouseEnter = jest.fn();
  const placeCard = shallow(
      <Apartment
        offer={TEST_OFFER}
        onCardHover={onCardHover}
        onHeaderButtonClick={onHeaderButtonClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
  );
  const cardTitle = placeCard.find(`.place-card__name`);
  cardTitle.props().onClick();

  expect(onHeaderButtonClick).toHaveBeenCalledTimes(1);

});

it(`On hover card must be card's id`, () => {
  const onCardHover = jest.fn();
  const onHeaderButtonClick = jest.fn();
  const mouseEnter = jest.fn();
  const placeCard = shallow(
      <Apartment
        id={`1`}
        offer={TEST_OFFER}
        onCardHover={onCardHover}
        onHeaderButtonClick={onHeaderButtonClick}
        onMouseEnter={mouseEnter}
        onMouseLeave={onMouseLeave}
      />
  );

  const card = placeCard.find(`.place-card`);
  card.simulate(`mouseEnter`);
  expect(mouseEnter.mock.calls[0][0]).toMatchObject(TEST_OFFER.id);
  expect(mouseEnter.mock.calls.length).toBe(1);
});
