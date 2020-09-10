import { html, LitElement } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

import menuItemStyle from '../../styles/components/menu-item.scss';

const feather = require('feather-icons');

class MenuItem extends LitElement {
	static get properties() {
		return {
			menu: { type: Object },
			_icon: { type: String },
		};
	}

	static get styles() {
		return [menuItemStyle];
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

	_renderIcon() {
		return feather.icons[this._icon].toSvg();
	}
}

customElements.define('menu-item', MenuItem);
