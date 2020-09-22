const DrawerInitiator = {
	init({ button, drawer }) {
		this._button = button;
		this._drawer = drawer;
		button.addEventListener('click', (event) => {
			this._toggleButton(event);
			this._toggleDrawer(event);
		});
	},

	setActiveMenu(url) {
		this._clearActiveMenu();
		const targetMenu = this._selectTargetMenu(url) || this._selectTargetMenu(`${url}home`);
		if (!this._isTargetMenuExists(targetMenu)) {
			return;
		}
		targetMenu.classList.add('--active');
		this._closeDrawer();
		this._closeButton();
	},

	_toggleDrawer(event) {
		event.stopPropagation();
		this._drawer.classList.toggle('--expanded');
	},

	_closeDrawer() {
		this._drawer.classList.remove('--expanded');
	},

	_toggleButton(event) {
		event.stopPropagation();
		this._button.classList.toggle('--expanded');
	},

	_closeButton() {
		this._button.classList.remove('--expanded');
	},

	_isTargetMenuExists(targetMenu) {
		return !!targetMenu;
	},

	_selectTargetMenu(url) {
		return this._drawer.querySelector(`[href='./#${url}']`);
	},

	_clearActiveMenu() {
		this._drawer.querySelectorAll('a').forEach((menu) => {
			menu.classList.remove('--active');
		});
	},
};

export default DrawerInitiator;
