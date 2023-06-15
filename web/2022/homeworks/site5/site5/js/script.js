let burger = document.querySelector('.header__burger');
let header = document.querySelector("header");
let body = document.querySelector('body');

burger.addEventListener("click", shomMenu);

function shomMenu(event){
	header.classList.toggle('active');
	body.classList.toggle('scroll');
}
window.addEventListener('resize', closeMenu);

function closeMenu(event) {
	if (document.documentElement.clientWidth > 768 && header.classList.contains('active')) {
		header.classList.remove('active');
		body.classList.remove('scroll');
	}
}