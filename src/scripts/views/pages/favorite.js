import { LitElement, html } from 'lit-element';
import Database from '../../services/db';
import '../../components/hero-section';
import '../../components/card-list';
import '../../components/loading-bar';
import '../../components/page-info';

export default class Favorite extends LitElement {
	static get properties() {
		return {
			_data: { type: Array },
			_loading: { type: Boolean },
		};
	}

	constructor() {
		super();
		this._data = [];
		this._loading = true;
	}

	render() {
		if (this._loading) {
			this._requestData();
			return this._renderLoading();
		}
		return this._renderData();
	}

	createRenderRoot() {
		return this;
	}

	async _requestData() {
		await Database.init();
		this._data = await Database.getAllRestaurants();
		this._loading = false;
	}

	_renderData() {
		if (!this._isDataAvailable()) {
			return this._renderEmptyInfo();
		}
		return html`
			<card-list .restaurants='${this._data}' title="Your Favorite Restaurants"></card-list>
		`;
	}

	_renderLoading() {
		return html`
			<loading-bar></loading-bar>
		`;
	}

	_renderEmptyInfo() {
		return html`
			<page-info icon="coffee" title="You have no favorite restaurants" description="Try to add your favorite restaurants and they should be here"></page-info>
		`;
	}

	_isDataAvailable() {
		return this._data.length;
	}
}

customElements.define('favorite-page', Favorite);
