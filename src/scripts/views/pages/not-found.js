import { LitElement, html } from 'lit-element';
import '../../components/page-info';

export default class NotFound extends LitElement {
	render() {
		return html`
			<page-info title="Oops! Page not found..." description="The page you requested is not available."></page-info>
		`;
	}
}

customElements.define('notfound-page', NotFound);
