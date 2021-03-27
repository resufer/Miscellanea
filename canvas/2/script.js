let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
let x = 300, y = 300;

let canvas1 = document.getElementById('canvas1');
let ctx1 = canvas1.getContext('2d');
canvas1.width = width / 2 - 10;
canvas1.height = height;

ctx1.strokeStyle = 'black';
ctx1.moveTo(300, 300);
ctx1.lineWidth = 5;
ctx1.stroke();



let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');
canvas2.width = width / 2 - 10;
canvas2.height = height;

ctx2.strokeStyle = 'black';
ctx2.moveTo(300, 300);
ctx2.lineWidth = 5;
ctx2.stroke();


window.onkeydown = function (event) {
	if (event.key === 'ArrowDown') {
		x += 10;
		y += 10;
	} else if (event.key === 'ArrowUp') {
		x -= 10;
		y -= 10;
	} else if (event.key === 'ArrowLeft') {
		x -= 10;
		y += 10;
	} else if (event.key === 'ArrowRight') {
		x += 10;
		y -= 10;
	} else if (event.key.toLowerCase() === 'w') {
		y -= 10;
	} else if (event.key.toLowerCase() === 'd') {
		x += 10;
	} else if (event.key.toLowerCase() === 's') {
		y += 10;
	} else if (event.key.toLowerCase() === 'a') {
		x -= 10;
	}

	ctx1.lineTo(x, y);
	ctx1.stroke();

	ctx2.lineTo(x, y);
	ctx2.stroke();
}
