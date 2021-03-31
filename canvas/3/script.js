let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
canvas.width = width;
canvas.height = height;
let lineWid, direction, timer, myX, myY;
let x = width / 2, y = height / 2;
let step = 3, stepCount = 0;



function drawDot() {
	ctx.clearRect(0, 0, width, height);
	if (stepCount === 0) {
		stepCount = Math.floor(Math.random() * 21);
		direction = Math.floor(Math.random() * 8);
	} else {
		stepCount--;
	}

	if (direction === 0) {
		y -= step;
	} else if (direction === 1) {
		x += step;
	} else if (direction === 2) {
		y += step;
	} else if (direction === 3) {
		x -= step;
	} else if (direction === 4) {
		x += step;
		y -= step;
	} else if (direction === 5) {
		x += step;
		y += step;
	} else if (direction === 6) {
		x -= step;
		y += step;
	} else if (direction === 7) {
		x -= step;
		y -= step;
	}

	if (x < 0 || y < 0 || x > width || y > height) stepCount = 0;

	ctx.lineCap = 'round';
	ctx.fillRect(x - 3, y - 3, 6, 6);
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(myX, myY);
	ctx.stroke();
	timer = setTimeout(drawDot, 80);
}; drawDot();


canvas.onmousemove = function (event) {
	myX = event.offsetX;
	myY = event.offsetY;
};






let x2 = width / 2 - 100, y2 = height / 2 - 100;
let stepCount2 = 0;
let direction2;
let lineWid2;

function drawDot2() {
	// ctx.clearRect(0, 0, width, height);
	if (stepCount2 === 0) {
		stepCount2 = Math.floor(Math.random() * 21);
		direction2 = Math.floor(Math.random() * 8);
	} else {
		stepCount2--;
	}

	if (direction2 === 0) {
		y2 -= step;
	} else if (direction2 === 1) {
		x2 += step;
	} else if (direction2 === 2) {
		y2 += step;
	} else if (direction2 === 3) {
		x2 -= step;
	} else if (direction2 === 4) {
		x2 += step;
		y2 -= step;
	} else if (direction2 === 5) {
		x2 += step;
		y2 += step;
	} else if (direction2 === 6) {
		x2 -= step;
		y2 += step;
	} else if (direction2 === 7) {
		x2 -= step;
		y2 -= step;
	}

	if (x2 < 0 || y2 < 0 || x2 > width || y2 > height) stepCount2 = 0;

	ctx.lineCap = 'round';
	ctx.fillRect(x2 - 3, y2 - 3, 6, 6);
	ctx.beginPath();
	ctx.moveTo(x2, y2);
	ctx.lineTo(myX, myY);
	ctx.stroke();
	timer2 = setTimeout(drawDot2, 80);
}; drawDot2();





let x3 = width / 2 + 100, y3 = height / 2 + 100;
let stepCount3 = 0;
let direction3;
let lineWid3;

function drawDot3() {
	if (stepCount3 === 0) {
		stepCount3 = Math.floor(Math.random() * 21);
		direction3 = Math.floor(Math.random() * 8);
	} else {
		stepCount3--;
	}

	if (direction3 === 0) {
		y3 -= step;
	} else if (direction3 === 1) {
		x3 += step;
	} else if (direction3 === 2) {
		y3 += step;
	} else if (direction3 === 3) {
		x3 -= step;
	} else if (direction3 === 4) {
		x3 += step;
		y3 -= step;
	} else if (direction3 === 5) {
		x3 += step;
		y3 += step;
	} else if (direction3 === 6) {
		x3 -= step;
		y3 += step;
	} else if (direction3 === 7) {
		x3 -= step;
		y3 -= step;
	}

	if (x3 < 0 || y3 < 0 || x3 > width || y3 > height) stepCount3 = 0;

	ctx.lineCap = 'round';
	ctx.fillRect(x3 - 3, y3 - 3, 6, 6);
	ctx.beginPath();
	ctx.lineWidth = lineWid3;
	ctx.moveTo(x3, y3);
	ctx.lineTo(myX, myY);
	ctx.stroke();
	timer3 = setTimeout(drawDot3, 80);
}; drawDot3();


canvas.onclick = function () {
	clearTimeout(timer);
	clearTimeout(timer2);
	clearTimeout(timer3);
}

canvas.ondblclick = function () {
	drawDot();
	drawDot2();
	drawDot3();
}
