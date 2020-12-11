import { LitElement, html } from 'lit-element';

class LoadingBar extends LitElement {
  render() {
    return html`
      <div class="loader-container">
        <div class="loader"></div>
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('loading-bar', LoadingBar);
