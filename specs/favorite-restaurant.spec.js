import Database from '../src/scripts/services/db';
import createFavoriteButtonElement from './helper/testFactories';

/* eslint-disable no-undef */
describe('favorite-restaurant:', () => {
  let node;
  const restaurant = { id: 1 };

  beforeEach(async () => {
    node = await createFavoriteButtonElement(restaurant);
  });

  afterEach(() => {
    node.remove();
  });

  it('should show the favorite button when the restaurant has not been favorited before', (done) => {
    expect(node.querySelector('[aria-label="Add to favorite"]')).toBeTruthy();
    done();
  });

  it('should not show the unfavorite button when the restaurant has not been favorited before', (done) => {
    expect(node.querySelector('[aria-label="Remove from favorite"]')).toBeFalsy();
    done();
  });

  it('should be able to favorite the restaurant', async (done) => {
    node.querySelector('.favorite-button').dispatchEvent(new Event('click'));
    await Database.init();
    const lastFavoritedRestaurant = await Database.getRestaurant(restaurant.id);
    expect(lastFavoritedRestaurant).toEqual(restaurant);

    await Database.deleteRestaurant(restaurant.id);
    done();
  });

  it('should not add a restaurant again when its already favorited', async (done) => {
    await Database.init();
    await Database.addRestaurant(restaurant);
    node.querySelector('.favorite-button').dispatchEvent(new Event('click'));
    expect(await Database.getAllRestaurants()).toEqual([restaurant]);

    await Database.deleteRestaurant(restaurant.id);
    done();
  });

  it('should not add a restaurant when it has no id', async (done) => {
    node.restaurant = {};
    node.querySelector('.favorite-button').dispatchEvent(new Event('click'));
    await Database.init();
    expect(await Database.getAllRestaurants()).toEqual([]);
    done();
  });
});
