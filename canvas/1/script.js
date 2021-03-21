let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let canWid = document.documentElement.clientWidth;
let canHei = document.documentElement.clientHeight;
canvas.width = canWid - 5;
canvas.height = canHei - 8;
ctx.moveTo(0, 0);
ctx.lineWidth = 3;
let x = 0, y = 0, z = 10;
ctx.strokeStyle = 'black';


let keyAction = {
	13: "enter",
	16: "shift",
	32: "space",
	37: "left",
	38: "up",
	39: "right",
	40: "down",
	69: 'e',
	83: 's',
	68: 'd',
	87: 'w'
};

let enter = function () {
	let en1 = prompt('1 - цвет, 2 - длина, 3 - ластик');
	if (en1 == '1') {
		let color = prompt('Введите цвет');
		ctx.strokeStyle = color;
	}
	else if (en1 == '2') {
		let strokeLength = prompt('Введите длину');
		z = Number(strokeLength);
	}
	else if (en1 == '3') {
		let eraserConfirm = confirm('Стереть всё?')
		eraser(eraserConfirm);
	}
}

let eraser = function () {
	ctx.closePath();
	ctx.clearRect(0, 0, canWid, canHei);
}

let keyPress = function () {
	let key;
	if (window.event) {
		key = keyAction[window.event.keyCode];
	}
	switch (key) {
		case 'up':
			y -= z;
			ctx.lineTo(x, y);
			ctx.stroke();
			break;
		case 'down':
			y += z;
			ctx.lineTo(x, y);
			ctx.stroke();
			break;
		case 'left':
			x -= z;
			ctx.lineTo(x, y);
			ctx.stroke();
			break;
		case 'right':
			x += z;
			ctx.lineTo(x, y);
			ctx.stroke();
			break;

		case 'e':
			y -= z;
			x += z;
			ctx.lineTo(x, y);
			ctx.stroke();
			break;
		case 's':
			y += z;
			x -= z;
			ctx.lineTo(x, y);
			ctx.stroke();
			break;
		case 'w':
			x -= z;
			y -= z;
			ctx.lineTo(x, y);
			ctx.stroke();
			break;
		case 'd':
			x += z;
			y += z;
			ctx.lineTo(x, y);
			ctx.stroke();
			break;

		case 'enter':
			enter();
			break;
	}
}

window.onkeydown = keyPress;

window.onclick = function (event) {
	ctx.moveTo(event.x, event.y);
	ctx.beginPath();
	x = event.x;
	y = event.y;
}
