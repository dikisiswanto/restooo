import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../utils/url-parser';
import routes from '../routes';

class App {
  constructor({
    button, drawer, content, skipLink,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._skipLink = skipLink;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
    });
  }

  async renderPage() {
    if (UrlParser.parseActiveUrlWithoutSplitter() === this._skipLink) {
      return;
    }
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = this._getRoute(url) || this._getNotFoundRoute();
    DrawerInitiator.setActiveMenu(url);
    await page.action;
    this._content.innerHTML = this._renderPageComponent(page.component);
  }

  _getRoute(url) {
    return routes.find((route) => route.path === url);
  }

  _getNotFoundRoute() {
    return routes.find((route) => route.path === '/not-found');
  }

  _renderPageComponent(component) {
    return `<${component}></${component}`;
  }
}

export default App;
