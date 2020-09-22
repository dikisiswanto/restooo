import { LitElement, html } from 'lit-element';
import Database from '../services/db';

class FavoriteButton extends LitElement {
	static get properties() {
		return {
			_isFavorited: { type: Boolean },
			restaurant: { type: Object },
		};
	}

	constructor() {
		super();
		this._isFavorited = false;
		this.restaurant = {};
		this._fetchFromDatabase();
	}

	render() {
		return html`
			<button class="favorite-button ${this._isFavorited ? '--favorited' : ''}" @click="${this._toggleFavorite}">${this._getButtonText()}</button>
		`;
	}

	_getButtonText() {
		return !this._isFavorited ? 'Add to favorite' : 'Remove from favorite';
	}

	_toggleFavorite() {
		if (this._isFavorited) {
			this._removeFromFavorite();
		} else {
			this._addToFavorite();
		}
	}

	async _fetchFromDatabase() {
		if (await this._isEntryExistOnDb()) {
			this._isFavorited = true;
		}
	}

	async _isEntryExistOnDb() {
		await Database.init();
		const isEntryExist = await Database.getRestaurant(this.restaurant.id);
		return !!isEntryExist;
	}

	async _addToFavorite() {
		await Database.init();
		await Database.addRestaurant(this.restaurant);
		this._isFavorited = true;
	}

	async _removeFromFavorite() {
		await Database.init();
		await Database.deleteRestaurant(this.restaurant.id);
		this._isFavorited = false;
	}

	createRenderRoot() {
		return this;
	}
}

customElements.define('favorite-button', FavoriteButton);
