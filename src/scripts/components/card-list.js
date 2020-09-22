import { html, LitElement } from 'lit-element';
import './card-item';

class CardList extends LitElement {
	static get properties() {
		return {
			restaurants: { type: Array },
			title: { type: String },
		};
	}

	constructor() {
		super();
		this.restaurants = [];
		this.title = 'Explore Restaurant';
	}

	render() {
		return html`
			<h2 class="card-list-title">${this.title}</h2>
			<div class="cards">
			${this.restaurants.map((restaurant) => html`<card-item .restaurant='${restaurant}'></card-item>`)}
			</div>
		`;
	}

	createRenderRoot() {
		return this;
	}
}

customElements.define('card-list', CardList);
