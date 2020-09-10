import { html, LitElement } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import cardStyle from '../../styles/components/card.scss';
import CONFIG from '../data/config';

const feather = require('feather-icons');

class CardItem extends LitElement {
	static get properties() {
		return {
			restaurant: { type: Object },
			_mapIcon: { type: String },
			_ratingIcon: { type: String },
		};
	}

	static get styles() {
		return [cardStyle];
	}

	constructor() {
		super();
		this.restaurant = {};
		this._mapIcon = feather.icons['map-pin'].toSvg();
		this._ratingIcon = feather.icons.star.toSvg();
	}

	render() {
		return html`
			<div class="card">
				<div class="card__header">
					<img src="${CONFIG.API_THUMBNAIL_IMG_PATH + this.restaurant.pictureId}" alt="Photo of ${this.restaurant.name}, a restaurant in ${this.restaurant.city}" class="card__image">
					<span class="card__badge">${unsafeHTML(this._mapIcon)} ${this.restaurant.city}</span>
				</div>
				<div class="card__body">
					<span class="--text-sm --text-semibold">${unsafeHTML(this._ratingIcon)} ${this.restaurant.rating.toFixed(1)}</span>
					<h3 class="card__title"><a href="./#/detail/${this.restaurant.id}" class="card__link">${this.restaurant.name}</a></h3>
					<p class="content__description">${this.restaurant.description.substr(0, 80)}...</p>
				</div>
			</div>
		`;
	}
}

customElements.define('card-item', CardItem);
