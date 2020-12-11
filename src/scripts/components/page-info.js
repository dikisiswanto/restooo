import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

const feather = require('feather-icons');

class PageInfo extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Oops! Something went wrong...';
    this.description = 'Check your internet connection or try again in a few minutes';
    this.icon = 'alert-octagon';
  }

  render() {
    return html`
      <section class="info">
        <div class="info__icon">${unsafeHTML(this._renderIcon())}</div>
        <div class="info__description">
          <p class="info__heading">${this.title}</p>
          ${this.description ? html`<p class="info__caption">${this.description}</p>` : html``}
        </div>
      </section>
    `;
  }

  createRenderRoot() {
    return this;
  }

  _renderIcon() {
    return feather.icons[this.icon].toSvg();
  }
}

customElements.define('page-info', PageInfo);
