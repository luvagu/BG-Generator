var css = document.querySelector('h3');
var type1 = document.querySelector('.type1');
var type2 = document.querySelector('.type2');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var random = document.getElementById('random');

// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);

function getValueFromRadioButton(name) {
	return [...document.getElementsByName('type')]
		.reduce((rez, btn) => (btn.checked ? btn.value : rez), null)
}

function setGradient() {
	if (getValueFromRadioButton('type')==='linear') {
		body.style.background = 'linear-gradient(to right, ' + color1.value + ' , ' + color2.value + ')';
	} else {
		body.style.background = 'radial-gradient(' + color1.value + ' , ' + color2.value + ' ) no-repeat center center fixed';
	}
	css.textContent = body.style.background + ';';
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function setRandomColor() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

// set initial input values
color1.value = '#ff0100';
color2.value = '#fffe00';

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

type1.addEventListener('click', setGradient);

type2.addEventListener('click', setGradient);

css.textContent = 'background: linear-gradient(to right, red , yellow);';

random.addEventListener('click', setRandomColor);