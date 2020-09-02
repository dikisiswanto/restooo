import 'regenerator-runtime'; /* for async await transpile */
import 'normalize.css';
import '../styles/main.scss';
import { restaurants } from '../DATA.json';

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
				<span class="card__badge">${data.city}</span>
			</div>
			<div class="card__body">
				<span class="--text-sm">Rating: ${data.rating}</span>
				<h3 class="card__title"><a href="#" class="card__link">${data.name}</a></h3>
				<p class="content__description">${data.description.substr(0, 80)}...</p>
			</div>
		</div>`;
		targetElement.innerHTML += cardElement;
	});
})
