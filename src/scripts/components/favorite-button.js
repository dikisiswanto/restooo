import { LitElement, html } from 'lit-element';
import favoriteButtonStyle from '../../styles/components/favorite-button.scss';
import Database from '../services/db';

class FavoriteButton extends LitElement {
	static get properties() {
		return {
			_isFavorited: { type: Boolean },
			restaurant: { type: Object },
		};
	}

	static get styles() {
		return [favoriteButtonStyle];
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
		const caption = !this._isFavorited ? 'Add to favorite' : 'Remove from favorite';
		return caption;
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
}

customElements.define('favorite-button', FavoriteButton);
