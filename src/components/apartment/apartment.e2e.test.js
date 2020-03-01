import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Apartment} from "./apartment";

Enzyme.configure({
  adapter: new Adapter(),
});
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

it(`Card should be  clicked`, () => {
  const onMouseEnter = jest.fn();
  const onHeaderButtonClick = jest.fn();
  const onMouseLeave = jest.fn();
  const placeCard = shallow(
      <Apartment
        offer={TEST_OFFER}
        onMouseEnter={onMouseEnter}
        onHeaderButtonClick={onHeaderButtonClick}
        onMouseLeave={onMouseLeave}
      />
  );
  const cardTitle = placeCard.find(`.place-card__name`);
  cardTitle.props().onClick();

  expect(onHeaderButtonClick).toHaveBeenCalledTimes(1);

});

it(`On hover card must be card's id`, () => {
  const onMouseEnter = jest.fn();
  const onHeaderButtonClick = jest.fn();
  const onMouseLeave = jest.fn();
  const placeCard = shallow(
      <Apartment
        id={`1`}
        offer={TEST_OFFER}
        onHeaderButtonClick={onHeaderButtonClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
  );

  const card = placeCard.find(`.place-card`);
  card.simulate(`mouseenter`);
  expect(onMouseEnter).toHaveBeenCalledWith(TEST_OFFER.id);


  card.simulate(`mouseleave`);
  expect(onMouseLeave).toHaveBeenCalledTimes(1);
  expect(onMouseLeave.mock.calls.length).toBe(1);
});
