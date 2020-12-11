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
  }

  async performUpdate() {
    await this._fetchFromDatabase();
    super.performUpdate();
  }

  render() {
    return html`
      <button class="favorite-button ${this._isFavorited ? '--favorited' : ''}" @click="${this._toggleFavorite}" aria-label="${this._getButtonText()}">${this._getButtonText()}</button>
    `;
  }

  _getButtonText() {
    return this._isFavorited ? 'Remove from favorite' : 'Add to favorite';
  }

  _toggleFavorite() {
    if (this._isFavorited) {
      this._removeFromFavorite();
    } else {
      this._addToFavorite();
    }
    this._isFavorited = !this._isFavorited;
  }

  async _fetchFromDatabase() {
    this._isFavorited = await this._isEntryExistOnDb();
  }

  async _isEntryExistOnDb() {
    await Database.init();
    const isEntryExist = await Database.getRestaurant(this.restaurant.id);
    return !!isEntryExist;
  }

  async _addToFavorite() {
    await Database.init();
    await Database.addRestaurant(this.restaurant);
  }

  async _removeFromFavorite() {
    await Database.init();
    await Database.deleteRestaurant(this.restaurant.id);
  }

  createRenderRoot() {
    return this;
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('favorite-button') || customElements.define('favorite-button', FavoriteButton);
