let canvas1 = document.getElementById('canvas1');
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
let x = width / 4, y = height / 4;
let ctx1 = canvas1.getContext('2d');
canvas1.width = width / 2 - 10;
canvas1.height = height / 2 - 10;
ctx1.strokeStyle = 'black';
ctx1.moveTo(x, y);
ctx1.lineWidth = 5;

ctx1.stroke();

let canvas2 = document.getElementById('canvas2');
canvas2.width = width / 2 - 10;
canvas2.height = height / 2 - 10;
let ctx2 = canvas2.getContext('2d');
ctx2.strokeStyle = 'black';
ctx2.moveTo(x, y);
ctx2.lineWidth = 5;
ctx2.stroke();

let canvas3 = document.getElementById('canvas3');
canvas3.width = width / 2 - 10;
canvas3.height = height / 2 - 10;
let ctx3 = canvas3.getContext('2d');
ctx3.strokeStyle = 'black';
ctx3.moveTo(x, y);
ctx3.lineWidth = 5;
ctx3.stroke();

let canvas4 = document.getElementById('canvas4');
canvas4.width = width / 2 - 10;
canvas4.height = height / 2 - 10;
let ctx4 = canvas4.getContext('2d');
ctx4.strokeStyle = 'black';
ctx4.moveTo(x, y);
ctx4.lineWidth = 5;
ctx4.stroke();

document.onkeydown = function (event) {
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
  
  ctx3.lineTo(x, y);
  ctx3.stroke();
  
  ctx4.lineTo(x, y);
  ctx4.stroke();
}
