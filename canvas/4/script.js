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
