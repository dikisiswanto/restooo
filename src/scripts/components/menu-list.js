import { html, LitElement } from 'lit-element';
import './menu-item';

class MenuList extends LitElement {
	static get properties() {
		return {
			menus: { type: Array },
			title: { type: String },
		};
	}

	constructor() {
		super();
		this.menus = [];
		this.title = 'Explore Restaurant';
	}

	render() {
		return html`
			<h3 class="menu-list-title">${this.title}<h3>
			<ul class="menus">
			${this.menus.map((menu) => html`<menu-item .menu='${menu}'></menu-item>`)}
			</ul>
		`;
	}

	createRenderRoot() {
		return this;
	}
}

customElements.define('menu-list', MenuList);
