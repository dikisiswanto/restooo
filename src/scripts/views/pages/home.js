import { LitElement, html } from 'lit-element';
import Api from '../../services/api';
import '../../components/hero-section';
import '../../components/card-list';
import '../../components/loading-bar';
import '../../components/page-info';

export default class Home extends LitElement {
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
    const { restaurants } = await Api.getAllRestaurants();
    this._data = restaurants || [];
    this._loading = false;
  }

  _renderData() {
    if (!this._isDataAvailable()) {
      return this._renderError();
    }
    return html`
      <hero-section></hero-section>
      <card-list .restaurants='${this._data}'></card-list>
    `;
  }

  _renderLoading() {
    return html`
      <loading-bar></loading-bar>
    `;
  }

  _renderError() {
    return html`
      <page-info></page-info>
    `;
  }

  _isDataAvailable() {
    return this._data.length;
  }
}

customElements.define('home-page', Home);
