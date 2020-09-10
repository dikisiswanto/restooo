import { html, LitElement } from 'lit-element';
import reviewFormStyle from '../../styles/components/review-form.scss';
import Api from '../services/api';

class ReviewForm extends LitElement {
	static get properties() {
		return {
			restaurantId: { type: String },
			_isValid: { type: Boolean },
		};
	}

	static get styles() {
		return [reviewFormStyle];
	}

	constructor() {
		super();
		this.restaurantId = null;
		this._isValid = true;
	}

	render() {
		return html`
			<form method="post" class="review-form" action="" @submit="${this._handleSubmit}">
				<h4 class="review-form__title">Submit a review</h4>
				<div class="review-form__body">
					<input type="hidden" name="id" value="${this.restaurantId}">
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

	_handleSubmit(event) {
		event.preventDefault();
		this._validateForm(event.target);
		if (this._isValid) {
			const jsonFormData = this._parseFormDataToJson(new FormData(event.target));
			this._submitReview(jsonFormData);
			this._resetForm(event.target);
		}
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
		const response = await Api.addReview(data);
		return response;
	}
}

customElements.define('review-form', ReviewForm);
