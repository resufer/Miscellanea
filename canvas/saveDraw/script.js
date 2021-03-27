let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
canvas.width = width;
canvas.height = height;
ctx.lineWidth = 3;
let isMouseDown;
let coords = [];

canvas.addEventListener('mousedown', function () {
	isMouseDown = true;
})

canvas.addEventListener('mouseup', function () {
	isMouseDown = false;
	ctx.beginPath();
	coords.push('mouseup')
})

canvas.addEventListener('mousemove', function (e) {
	if (isMouseDown) {

		coords.push([e.clientX, e.clientY]);

		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY);
	}
});

let save = function () {
	localStorage.setItem('coords', JSON.stringify(coords));
}

let replay = function () {
	let timer = setInterval(function () {
		if (!coords.length) {
			clearInterval(timer);
			ctx.beginPath();
			return;
		}
		let crd = coords.shift(),
			e = {
				clientX: crd['0'],
				clientY: crd['1']
			};
		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY);
	}, 30)
}

document.addEventListener('keydown', function (e) {
	if (e.keyCode === 32) {
		ctx.clearRect(0, 0, width, height);
	}
	if (e.keyCode === 83) {
		save();
	}
	if (e.keyCode === 13) {
		localStorage.getItem('coords', JSON.stringify(coords));
		ctx.clearRect(0, 0, width, height);
		replay();
	}
});
