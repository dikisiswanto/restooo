import Database from '../src/scripts/services/db';
import createFavoriteButtonElement from './helper/testFactories';

/* eslint-disable no-undef */
describe('unfavorite-restaurant:', () => {
  let node;
  const restaurant = { id: 1 };

  beforeEach(async () => {
    await Database.init();
    await Database.addRestaurant(restaurant);
    node = await createFavoriteButtonElement(restaurant);
  });

  afterEach(async () => {
    await Database.init();
    await Database.deleteRestaurant(restaurant.id);
    node.remove();
  });

  it('should display unfavorite button when the restaurant has been favorited', async (done) => {
    expect(node.querySelector('[aria-label="Remove from favorite"]')).toBeTruthy();
    done();
  });

  it('should display unfavorite button when the restaurant has been favorited', async (done) => {
    expect(node.querySelector('[aria-label="Add to favorite"]')).toBeFalsy();
    done();
  });

  it('should be able to remove favorited restaurant from the list', async (done) => {
    node.querySelector('.favorite-button').dispatchEvent(new Event('click'));
    await Database.init();
    expect(await Database.getAllRestaurants()).toEqual([]);
    done();
  });

  it('should not throw error if the unfavorited restaurant is not in the list', async (done) => {
    await Database.init();
    await Database.deleteRestaurant(restaurant.id);
    node.querySelector('.favorite-button').dispatchEvent(new Event('click'));
    expect(await Database.getAllRestaurants()).toEqual([]);
    done();
  });
});
