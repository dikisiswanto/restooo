const assert = require('assert');

/* eslint-disable no-undef */
Feature('Favorite restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited movies', ({ I }) => {
  I.see('You have no favorite restaurants', '.info__heading');
});

Scenario('add a restaurant to favorite', async ({ I }) => {
  I.see('You have no favorite restaurants', '.info__heading');

  I.amOnPage('/');
  I.seeElement('a.card');

  const firstRestaurant = locate('a.card').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);
  I.seeElement('[aria-label="Add to favorite"]');

  I.click('[aria-label="Add to favorite"]');

  I.amOnPage('/#/favorite');
  I.seeElement('a.card');

  const favoritedRestaurantName = await I.grabTextFrom('a.card');

  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);
});

Scenario('remove a restaurant from favorite', async ({ I }) => {
  I.see('You have no favorite restaurants', '.info__heading');

  I.amOnPage('/');
  const firstRestaurant = locate('a.card').first();
  I.click(firstRestaurant);

  I.seeElement('[aria-label="Add to favorite"]');
  I.click('[aria-label="Add to favorite"]');
  I.amOnPage('/#/favorite');
  I.seeElement('a.card');
  I.click('a.card');

  I.seeElement('[aria-label="Remove from favorite"]');
  I.click('[aria-label="Remove from favorite"]');
  I.amOnPage('/#/favorite');

  I.see('You have no favorite restaurants', '.info__heading');
});
