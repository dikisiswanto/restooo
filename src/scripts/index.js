import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'normalize.css';
import '../styles/main.scss';
import App from './views/app';
import serviceWorkerRegister from './utils/service-worker-register';

const feather = require('feather-icons');

const app = new App({
  button: document.querySelector('#menu-button'),
  drawer: document.querySelector('#navigation-drawer'),
  content: document.querySelector('#content'),
  skipLink: '#main-content',
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  feather.replace();
  serviceWorkerRegister.init();
});
