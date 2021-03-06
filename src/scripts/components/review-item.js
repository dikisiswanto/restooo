import { html, LitElement } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

const feather = require('feather-icons');

class ReviewItem extends LitElement {
  static get properties() {
    return {
      review: { type: Object },
    };
  }

  constructor() {
    super();
    this.review = {};
  }

  render() {
    return html`
      <div class="review-item">
        <div class="review-item__body">
          <p>${this.review.review}</p>
        </div>
        <div class="review-item__footer">
          <span class="review-item__user">${unsafeHTML(feather.icons.user.toSvg())} ${this.review.name}</span>
          <span class="review-item__date">${unsafeHTML(feather.icons.calendar.toSvg())} ${this.review.date}</span>
        </div>
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('review-item', ReviewItem);
