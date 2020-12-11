/* eslint-disable no-undef */
const assert = require('assert');

Feature('Customer Reviews');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('showing customer reviews of a restaurant', ({ I }) => {
  I.seeElement('a.card');
  I.click(locate('a.card').last());
  I.seeElement('.review-item');
});

Scenario('submit customer review', async ({ I }) => {
  I.seeElement('a.card');
  I.click(locate('a.card').last());
  I.seeElement('.review-form');

  const numOfInitialReview = await I.grabNumberOfVisibleElements('.review-item');

  const reviewer = 'John Doe';
  const bodyReview = 'Submit review from e2e test codeceptJS';

  I.fillField('textarea[name=review]', bodyReview);
  I.fillField('input[name=name]', reviewer);
  I.pressKey('Enter');

  // wait for element to be appeared. timeout in 3 seconds
  I.waitForElement(`review-item:nth-child(${numOfInitialReview + 1})`, 3000);

  const numOfCurrentReview = await I.grabNumberOfVisibleElements('.review-item');

  assert.strictEqual(numOfInitialReview + 1, numOfCurrentReview);
  assert.strictEqual((await I.grabTextFrom(locate('.review-item__user').last())).trim(), reviewer);
  assert.strictEqual((await I.grabTextFrom(locate('.review-item__body').last())).trim(), bodyReview);
});
