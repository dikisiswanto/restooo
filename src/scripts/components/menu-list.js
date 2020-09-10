import { html, LitElement } from 'lit-element';
import './menu-item';

import menuListStyle from '../../styles/components/menu-list.scss';

class MenuList extends LitElement {
	static get properties() {
		return {
			menus: { type: Array },
			title: { type: String },
		};
	}

	static get styles() {
		return [menuListStyle];
	}

	constructor() {
		super();
		this.menus = [];
		this.title = 'Explore Restaurant';
	}

	render() {
		return html`
			<h3 class="menu-list-title">${this.title}<h3>
			<div class="menus">
			${this.menus.map((menu) => html`<menu-item menu='${JSON.stringify(menu)}'></menu-item>`)}
			</div>
		`;
	}
}

customElements.define('menu-list', MenuList);
