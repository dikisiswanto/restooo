import { html, LitElement } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

const feather = require('feather-icons');

class MenuItem extends LitElement {
  static get properties() {
    return {
      menu: { type: Object },
      _icon: { type: String },
    };
  }

  constructor() {
    super();
    this.menu = {};
    this._icon = 'check-square';
  }

  render() {
    return html`
      <li class="menu-item">${unsafeHTML(this._renderIcon())} ${this.menu.name}</li>
    `;
  }

  createRenderRoot() {
    return this;
  }

  _renderIcon() {
    return feather.icons[this._icon].toSvg();
  }
}

customElements.define('menu-item', MenuItem);
