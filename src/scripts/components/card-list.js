import { html, LitElement } from 'lit-element';
import './card-item';

import cardListStyle from '../../styles/components/card-list.scss';

class CardList extends LitElement {
	static get properties() {
		return {
			restaurants: { type: Array },
			title: { type: String },
		};
	}

	static get styles() {
		return [cardListStyle];
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
			${this.restaurants.map((restaurant) => html`<card-item restaurant='${JSON.stringify(restaurant)}'></card-item>`)}
			</div>
		`;
	}
}

customElements.define('card-list', CardList);
