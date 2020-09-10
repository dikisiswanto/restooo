import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import Api from '../../services/api';
import '../../components/hero-section';
import '../../components/loading-bar';
import '../../components/page-info';
import '../../components/menu-list';
import '../../components/review-item';
import '../../components/favorite-button';
import UrlParser from '../../utils/url-parser';
import CONFIG from '../../data/config';
import detailStyle from '../../../styles/components/detail.scss';
import reviewFormStyle from '../../../styles/components/review-form.scss';

const feather = require('feather-icons');

export default class Detail extends LitElement {
	static get properties() {
		return {
			_data: { type: Object },
			_loading: { type: Boolean },
			_icons: { type: Object },
			_isValid: { type: Boolean },
		};
	}

	static get styles() {
		return [detailStyle, reviewFormStyle];
	}

	constructor() {
		super();
		this._data = {};
		this._loading = true;
		this._icons = {
			brand: 'coffee',
			location: 'map-pin',
			rating: 'star',
			back: 'chevron-left',
			tag: 'tag',
		};
		this._isValid = true;
	}

	render() {
		if (this._loading) {
			this._requestData();
			return this._renderLoading();
		}
		return this._renderData();
	}

	async _requestData() {
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const { restaurant } = await Api.getRestaurant(url.id);
		this._data = restaurant || {};
		this._loading = false;
	}

	_renderData() {
		if (!this._isDataAvailable()) {
			return this._renderError();
		}
		return html`
			<a href="#/home/" class="back-to-home">${unsafeHTML(this._renderIcon(this._icons.back))} Back to home</a>
			<h2 class="detail__title">Restaurant Details</h2>
			<section class="details">
				<div class="detail__image">
					<img src="${CONFIG.API_MEDIUM_IMG_PATH + this._data.pictureId}" alt="Photo of ${this._data.name} restaurant"/>
				</div>
				<div class="detail__group">
					<ul class="detail__list">
						<li class="detail__list__item">${unsafeHTML(this._renderIcon(this._icons.brand))} Restaurant: <span class="--text-semibold">${this._data.name}</span></li>
						<li class="detail__list__item">${unsafeHTML(this._renderIcon(this._icons.location))} Location: <span class="--text-semibold">${`${this._data.address}, ${this._data.city}`}</span></li>
						<li class="detail__list__item">${unsafeHTML(this._renderIcon(this._icons.rating))} Rating: <span class="--text-semibold">${this._data.rating.toFixed(1)}</span></li>
						<li class="detail__list__item">${unsafeHTML(this._renderIcon(this._icons.tag))} Categories: ${this._data.categories.map(({ name }) => html`<span class="ct">${name}</span>`)}</li>
					</ul>
					<div class="detail__description">
						<h3 class="detail__subtitle">Description</h3>
						<p>${this._data.description}</p>
					</div>
					<favorite-button restaurant='${JSON.stringify(this._data)}'></favorite-button>
				</div>
			</section>
			<h3 class="detail__subtitle detail__subtitle--bordered --text-center">Menus</h3>
			<section class="menu-section">
				<menu-list menus='${JSON.stringify(this._data.menus.foods)}' title="Foods"></menu-list>
				<menu-list menus='${JSON.stringify(this._data.menus.drinks)}' title="Drinks"></menu-list>
			</section>
			<h3 class="detail__subtitle detail__subtitle--bordered --text-center">Consumer Reviews</h3>
			<section class="review-section">
				${this._data.consumerReviews.map((review) => html`<review-item review="${JSON.stringify(review)}"></review-item>`)}
			</section>
			<form method="post" class="review-form" action="" @submit="${this._handleSubmit}">
				<h4 class="review-form__title">Submit a review</h4>
				<div class="review-form__body">
					<input type="hidden" name="id" value="${this._data.id}">
					${this._renderErrorForm()}
					<div class="review-form__group">
						<label for="name">Name <span>*</span></label>
						<input type="text" class="review-form__input" name="name" id="name">
					</div>
					<div class="review-form__group">
						<label for="review">Review <span>*</span></label>
						<textarea rows="5" class="review-form__input" name="review" id="review"></textarea>
					</div>
				</div>
				<div class="review-form__footer">
					<button type="submit" class="review-form__button">Submit</button>
				</div>
			</form>
		`;
	}

	_renderErrorForm() {
		if (!this._isValid) {
			return html`
				<div class="review-form__error">Please fill out all form properly!</div>
			`;
		}
		return html``;
	}

	async _handleSubmit(event) {
		event.preventDefault();
		this._validateForm(event.target);
		if (this._isValid) {
			const jsonFormData = this._parseFormDataToJson(new FormData(event.target));
			this._resetForm(event.target);
			await this._submitReview(jsonFormData);
		}
		await this._requestData();
	}

	_parseFormDataToJson(formData) {
		return Object.fromEntries(formData);
	}

	_isValidForm(form) {
		const inputs = form.querySelectorAll('.review-form__input');
		let valid = true;
		inputs.forEach((input) => {
			if (!input.value.trim()) {
				valid = false;
			}
		});
		return valid;
	}

	_validateForm(form) {
		this._isValid = this._isValidForm(form);
	}

	_resetForm(form) {
		form.reset();
	}

	async _submitReview(data) {
		await Api.addReview(data);
	}

	_renderLoading() {
		return html`
			<loading-bar><loading-bar>
		`;
	}

	_renderError() {
		return html`
			<page-info></page-info>
		`;
	}

	_renderIcon(icon) {
		return feather.icons[icon].toSvg();
	}

	_isDataAvailable() {
		return Object.keys(this._data).length;
	}
}

customElements.define('detail-page', Detail);
