import '@fontsource/noto-sans';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const photos = new Swiper('.photos', {
	slidesPerView: 'auto',
	centeredSlides: true,
	spaceBetween: 30,
	pagination: {
		el: '.photos-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.photos-button-next',
		prevEl: '.photos-button-prev',
	},
});

import '../scss/main.scss';
