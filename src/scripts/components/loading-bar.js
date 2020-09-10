import { LitElement, html } from 'lit-element';
import loadingStyles from '../../styles/components/loading-bar.scss';

class LoadingBar extends LitElement {
	static get styles() {
		return [loadingStyles];
	}

	render() {
		return html`
			<div class="loader-container">
				<div class="loader"></div>
			</div>
		`;
	}
}

customElements.define('loading-bar', LoadingBar);
