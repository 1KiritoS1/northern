import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

//* --- Media settings --- *//
const secondCard = document.querySelector('.offer__card--second'),
	content = secondCard.querySelector('.offer__content');

if (document.body.clientWidth < 991) {
	const logo = document.getElementById('logo');
	logo.src = 'img/logo-768.svg';

	const stock = document.querySelector('.product--stock'),
		novelty = document.querySelector('.product--novelty'),
		bought = document.querySelector('.product--bought'),
		productList = [stock, novelty, bought];
	const stockText = stock.querySelectorAll('.product__text'),
		noveltyText = novelty.querySelectorAll('.product__text'),
		boughtText = bought.querySelectorAll('.product__text');
	const stockImage = stock.querySelectorAll('.image'),
		noveltyImage = novelty.querySelectorAll('.image'),
		boughtImage = bought.querySelectorAll('.image');

	// --- Global changes
	for (let i = 0; i < productList.length; i++) {
		const allText = productList[i].querySelectorAll('.product__text');
		const allImages = productList[i].querySelectorAll('.image');
		// Change text height
		for (let text of allText) {
			text.style.height = '48px';
		}
		// Change images styles
		for (let image of allImages) {
			// ...
		}
	}

	// --- Local changes
	// Change text 
	for (let i = 0; i < stockText.length; i++) {
		stockText[1].textContent = 'Молоко Простоквашино';
		stockText[2].textContent = 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ';
	}
	for (let i = 0; i < noveltyText.length; i++) {
		noveltyText[1].textContent = 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ...';
	}
	// Change images
	for (let i = 0; i < stockImage.length; i++) {
		stockImage[0].src = 'img/product/media/stock/1.jpg';
		stockImage[1].src = 'img/product/media/stock/2.jpg';
		stockImage[2].src = 'img/product/media/stock/3.jpg';
		stockImage[3].src = 'img/product/media/novelty/2.jpg'; // < 575px
	}
	for (let i = 0; i < noveltyImage.length; i++) {
		noveltyImage[0].src = 'img/product/media/novelty/1.jpg';
		noveltyImage[1].src = 'img/product/media/stock/3.jpg';
		noveltyImage[2].src = 'img/product/media/novelty/2.jpg';
		noveltyImage[3].src = 'img/product/media/stock/2.jpg'; // < 575px
	}
	for (let i = 0; i < boughtImage.length; i++) {
		boughtImage[0].src = 'img/product/media/bought/1.jpg';
		boughtImage[1].src = 'img/product/media/novelty/2.jpg';
		boughtImage[2].src = 'img/product/media/novelty/1.jpg';
		boughtImage[3].src = 'img/product/media/stock/2.jpg'; // < 575px
	}

	const cardImages = document.querySelectorAll('.offer__img');
	for (let i = 0; i < cardImages.length; i++) {
		cardImages[0].src = 'img/offer/media/card-768.svg';
		cardImages[1].src = 'img/offer/media/cart-768.svg';
	}
	content.classList.add('active');

	const articleImages = document.querySelectorAll('.article__img');
	for (let i = 0; i < articleImages.length; i++) {
		articleImages[0].src = 'img/article/media/1.jpg';
		articleImages[1].src = 'img/article/media/2.jpg';
		articleImages[2].src = 'img/article/media/3.jpg';
	}
} else {
	if (content.classList.contains('active')) {
		content.classList.remove('active');
	}
}

if (document.body.clientWidth < 575) {
	const shopImage = document.querySelector('.shop__img');
	shopImage.src = 'img/map-575.jpg';

	const articleImages = document.querySelectorAll('.article__img');
	for (let i = 0; i < articleImages.length; i++) {
		articleImages[0].src = 'img/article/media/575/1.jpg';
		articleImages[1].src = 'img/article/media/575/2.jpg';
		articleImages[2].src = 'img/article/media/575/3.jpg';
	}
}

//* --- Button settings --- *//
const shopButtons = document.querySelectorAll('.btn-shop');
const destruction = (array) => {
	for (let index of array) {
		index.classList.remove('active');
	}
}

shopButtons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		destruction(shopButtons);
		btn.classList.add('active');
	})
});