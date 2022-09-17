'use strict'

const body = document.querySelector('body');

for (let i = 0; i < 20; i++) {
	body.insertAdjacentHTML('beforeend', `<div></div>`);
}

const blocks = body.querySelectorAll('div');

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

blocks.forEach((element) => {
	element.style.backgroundColor = `${getRandomColor()}`;
	element.style.height = '300px';
	element.style.paddingLeft = "50px";
	element.style.paddingTop = "50px";
	element.style.overflow = "auto";
	element.style.border = "5px solid black";
	if (element !== blocks[4] && element !== blocks[5] && element !== blocks[6]) {
		element.addEventListener('click', scroll);
	}
});

blocks[4].insertAdjacentHTML('afterbegin', '<h1>Привет</h1>');

const element = blocks[4].querySelector('h1');

element.className = 'title';

element.insertAdjacentHTML('afterend', '<ul></ul>');

const list = blocks[4].querySelector('ul');

list.className = 'list';

for (let i = 0; i < 3; i++) {
	list.insertAdjacentHTML('beforeend', `<li>${i + 1}</li>`);
}

const listItems = list.querySelectorAll('li');

listItems.forEach((element) => {
	element.className = 'list__element';
});

list.insertAdjacentHTML('afterend', '<div>Привет!</div>');

const container = blocks[4].querySelector('div');

container.dataset.sayHi = 'yes';

const style = container.dataset.sayHi;
console.log(style);

const item = list.lastElementChild;

console.log(item.textContent);

for (let i = 0; i < 10; i++) {
	container.insertAdjacentHTML('beforeend', `<div>Текст ${i + 1}</div>`);
}

const items = container.querySelectorAll('div');

items.forEach((element) => {
	element.className = 'like';
});

items[1].className = 'subscribe';

items[2].classList.add('subscribe');

const likes = document.querySelectorAll('.like');

likes.forEach((element) => {
	console.log(element.textContent);
});

const height = blocks[4].getBoundingClientRect().top + window.scrollY;

function scroll(event) {
	window.scrollTo(0, height);
	console.log(event.pageY);
}

blocks[5].style.position = "relative";

blocks[5].insertAdjacentHTML('beforeend', `<a class="button">Кнопка</a>`);

const button = blocks[5].querySelector(".button");

button.style.display = "inline-block";

button.style.paddingTop = "5px";

button.style.paddingBottom = "5px";

button.style.marginBottom = "15px";

button.style.textAlign = "center";

button.style.width = "100px";

button.style.backgroundColor = "blue";

button.style.color = "white";

body.addEventListener("mousedown", searchShow);
body.addEventListener("keyup", searchClose);

button.insertAdjacentHTML('afterend', `<input placeholder = "Введите что-нибудь" type="text" maxlength="10" class="input"></input>`);

const input = blocks[5].querySelector(".input");

input.insertAdjacentHTML('afterend', `<span class="input">осталось 10 символов</span>`);

const inputs = blocks[5].querySelectorAll(".input");

input.style.height = "36px";

input.style.fontSize = "26px";

const inputText = blocks[5].querySelector("span.input");

input.style.marginRight = "10px";

input.style.maxLength = "10";

let button2 = button.cloneNode(true);

let inputs2 = [];

let i = 0;

inputs.forEach(element => {
	inputs2[i] = element.cloneNode(true);
	i++;
});

function searchShow(event) {
	const inputs = event.target.parentElement.querySelectorAll(".input");
	inputs.forEach(element => {
		if (event.target.closest(".button")) {
			element.classList.toggle("active");
		}
		else if (!event.target.closest(".input") && !event.target.closest(".submit-button")) {
			element.classList.remove("active");
		}
	});
}

function searchClose(event) {
	const inputs = event.target.parentElement.querySelectorAll(".input");
	inputs.forEach(element => {
		if (event.code === "Escape") {
			element.classList.remove("active");	
		}
	});
}

function maxLength(event) {
	let content = event.target.parentElement.querySelector(".input").value;
	let lenght = content.length;
	event.target.parentElement.querySelector("span.input").textContent = `осталось ${10 - lenght} символов`;
}

blocks[6].style.position = "relative";

blocks[6].insertAdjacentHTML('afterBegin', "<form> </form>");

let form = blocks[6].querySelector("form");

form.appendChild(button2);

inputs2.forEach(element => {
	form.appendChild(element);
});

form.querySelector("input").name = "login";

form.insertAdjacentHTML('beforeend', `<br> <textarea name="textArea" class="textarea"></textarea>`);

form.insertAdjacentHTML('beforeend', `<br><button class="submit-button">Отправить</и>`);

const submitbButton = form.querySelector(".submit-button");

submitbButton.style.display = "inline-block";

submitbButton.style.paddingTop = "5px";

submitbButton.style.paddingBottom = "5px";

submitbButton.style.width = "100px";

submitbButton.style.backgroundColor = "green";

submitbButton.style.color = "white";

const textarea = form.querySelector(".textarea");

textarea.style.width = "200px";

textarea.style.height = "100px";


const allInputs = document.querySelectorAll('input');

allInputs.forEach(element => {
	element.addEventListener('input', maxLength);
});

form.addEventListener("submit", submit);

form.textArea.addEventListener("paste", cancelPaste);

console.log(form.textarea);

function submit(event) {
	if (form.login.value === "") {
		event.preventDefault();
	}
}

function cancelPaste(event) {
	event.preventDefault();
}

console.log(document.querySelector('body'));

console.log(window.innerWidth - document.documentElement.offsetWidth);