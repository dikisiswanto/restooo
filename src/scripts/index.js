import 'regenerator-runtime'; /* for async await transpile */
import 'normalize.css';
import '../styles/main.scss';
import { restaurants } from '../DATA.json';
const feather = require('feather-icons');

window.addEventListener('DOMContentLoaded', function () {
	const navButton = document.querySelector('.nav-button');
	const navList = document.querySelector('.nav');
	navButton.addEventListener('click', function () {
		navButton.classList.toggle('nav-button--expanded');
		navList.classList.toggle('nav--expanded');
	});

	const targetElement = document.querySelector('#restaurants-list');
	targetElement.innerHTML = '';
	restaurants.forEach(data => {
		const cardElement = `<div class="card">
			<div class="card__header">
				<img src="${data.pictureId}" alt="Photo of ${data.name}, a restaurant in ${data.city}" class="card__image">
				<span class="card__badge"><i class="icon icon--map-marker" data-feather="map-pin" aria-label="map marker icon"></i> ${data.city}</span>
			</div>
			<div class="card__body">
				<span class="--text-sm --text-semibold"><i class="icon icon--rating" data-feather="star" aria-label="rating icon"></i> ${data.rating}</span>
				<h3 class="card__title"><a href="#" class="card__link">${data.name}</a></h3>
				<p class="content__description">${data.description.substr(0, 80)}...</p>
			</div>
		</div>`;
		targetElement.innerHTML += cardElement;
	});

	// Replace icons
	feather.replace();
})
