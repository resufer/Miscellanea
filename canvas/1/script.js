let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
canvas.width = width;
canvas.height = height;

let x = 0, y = 0, z = 10;
ctx.moveTo(0, 0);
ctx.lineWidth = 3;
ctx.strokeStyle = 'black';


let enter = function () {
	let en1 = prompt('1 - цвет, 2 - длина, 3 - ластик');
	if (en1 == '1') {
		let color = prompt('Введите цвет');
		ctx.strokeStyle = color;
	}
	else if (en1 == '2') {
		let strokeLength = prompt('Введите длину');
		z = +(strokeLength);
	}
	else if (en1 == '3') {
		let eraserConfirm = confirm('Стереть всё?')
		eraser(eraserConfirm);
	}
}

let eraser = function () {
	ctx.closePath();
	ctx.clearRect(0, 0, width, height);
}

let keyPress = function (e) {
	switch (e.key) {
		case 'ArrowUp':
			y -= z;
			break;
		case 'ArrowDown':
			y += z;
			break;
		case 'ArrowLeft':
			x -= z;
			break;
		case 'ArrowRight':
			x += z;
			break;

		case 'e':
			y -= z;
			x += z;
			break;
		case 's':
			y += z;
			x -= z;
			break;
		case 'w':
			x -= z;
			y -= z;
			break;
		case 'd':
			x += z;
			y += z;
			break;

		case 'Enter':
			enter();
			break;
	}

	ctx.lineTo(x, y);
	ctx.stroke();
}

window.onkeydown = keyPress;

window.onclick = function (event) {
	ctx.moveTo(event.x, event.y);
	ctx.beginPath();
	x = event.x;
	y = event.y;
}
