let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
canvas.width = width;
canvas.height = height;

let points = {
  A: { x: 0.10 * width, y: 0.95 * height },
  B: { x: 0.10 * width, y: 0.50 * height },
  C: { x: 0.50 * width, y: 0.05 * height },
  D: { x: 0.90 * width, y: 0.50 * height },
  E: { x: 0.90 * width, y: 0.95 * height }
};

let pointX, pointY, time = 2000;


let drawPentagon = function () {
  ctx.beginPath();

  ctx.moveTo(points.A.x, points.A.y);

  ctx.lineTo(points.B.x, points.B.y);
  ctx.stroke();

  ctx.lineTo(points.C.x, points.C.y);
  ctx.stroke();

  ctx.lineTo(points.D.x, points.D.y);
  ctx.stroke();

  ctx.lineTo(points.E.x, points.E.y);
  ctx.stroke();

  ctx.lineTo(points.A.x, points.A.y);
  ctx.stroke();

  ctx.closePath()
};

let initPoint = function () {
  ctx.beginPath();

  pointX = ((Math.random()).toFixed(2)) * width;
  pointY = ((Math.random()).toFixed(2)) * height;

  ctx.arc(pointX, pointY, 3, 0, Math.PI * 2);
  ctx.fillStyle = 'black';
  ctx.fill();

  ctx.closePath();
}

let movePoint = function () {
  // A: 1 or 2, B: 3 or 4, C: 5 or 6, D: 7 or 8, E: 9 or 10
  let randomDirection = Math.ceil(Math.random() * 10);

  if (randomDirection < 3) { // A
    pointX += (points.A.x - pointX) / 1.5;
    pointY += (points.A.y - pointY) / 1.5;
  } else if (randomDirection < 5) { // B
    pointX += (points.B.x - pointX) / 1.5;
    pointY += (points.B.y - pointY) / 1.5;
  } else if (randomDirection < 7) { // C
    pointX += (points.C.x - pointX) / 1.5;
    pointY += (points.C.y - pointY) / 1.5;
  } else if (randomDirection < 9) { // D
    pointX += (points.D.x - pointX) / 1.5;
    pointY += (points.D.y - pointY) / 1.5;
  } else { // E
    pointX += (points.E.x - pointX) / 1.5;
    pointY += (points.E.y - pointY) / 1.5;
  }

  ctx.beginPath();
  ctx.arc(pointX, pointY, 3, 0, Math.PI * 2)
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.closePath();
}

drawPentagon()
initPoint()
let interval = setInterval(() => movePoint(), time)


window.addEventListener('keypress', (e) => {
  if (e.key === ' ') {
    clearInterval(interval)
    time /= 5
    interval = setInterval(() => movePoint(), time)
  } else if (e.key === 'Enter') {
    clearInterval(interval)
    time *= 5
    interval = setInterval(() => movePoint(), time)
  }
});
