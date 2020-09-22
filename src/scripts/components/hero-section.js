import { LitElement, html } from 'lit-element';

class Hero extends LitElement {
	static get properties() {
		return {
			banner: { type: String },
			caption: { type: String },
			title: { type: String },
			description: { type: String },
		};
	}

	constructor() {
		super();
		this.banner = './images/heros/hero-image_2.jpg';
		this.caption = 'Banner: Pick up your own taste! Find different taste from various restaurants near you';
		this.title = 'Pick up your own taste!';
		this.description = 'Find different taste from various restaurants near you...';
	}

	render() {
		return html`
			<section class="hero">
				<img src="${this.banner}" alt="${this.caption}" class="hero__image">
				<div class="hero__description">
					<p class="hero__heading">${this.title}</p>
					${this.description ? html`<p class="hero__caption">${this.description}</p>` : html``}
				</div>
			</section>
		`;
	}

	createRenderRoot() {
		return this;
	}
}

customElements.define('hero-section', Hero);
