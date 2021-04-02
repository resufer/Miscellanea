let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
canvas.width = width;
canvas.height = height;
let x, y;
let clickX, clickY;
let moveX = width / 2, moveY = height / 2;

let draw = function (event) {
	x = event.offsetX;
	y = event.offsetY;
	ctx.clearRect(0, 0, width, height);
	ctx.beginPath();
	ctx.moveTo(moveX, moveY);
	ctx.quadraticCurveTo(x, y, clickX, clickY);
	ctx.stroke();
	ctx.closePath();
}

canvas.onclick = function (event) {
	clickX = event.clientX;
	clickY = event.clientY;
	document.onmousemove = draw;
}

canvas.ondblclick = function () {
	ctx.clearRect(0, 0, width, height);
	clickX = width / 2;
	clickY = height / 2;
}

document.onkeydown = function (e) {
	if (e.keyCode === 68) moveX += 5;
	if (e.keyCode === 65) moveX -= 5;
	if (e.keyCode === 83) moveY += 5;
	if (e.keyCode === 87) moveY -= 5;
}
