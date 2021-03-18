let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
canvas.width = width;
canvas.height = height;

let quadrilateralPoints = {
  A: { x: 0, y: height },
  B: { x: 0, y: 0 },
  C: { x: width, y: 0 },
  D: { x: width, y: height }
};

let pointX, pointY, time = 2000;


let drawQuadrilateral = function () {
  ctx.beginPath();

  ctx.moveTo(quadrilateralPoints.A.x, quadrilateralPoints.A.y);

  ctx.lineTo(quadrilateralPoints.B.x, quadrilateralPoints.B.y);
  ctx.stroke();

  ctx.lineTo(quadrilateralPoints.C.x, quadrilateralPoints.C.y);
  ctx.stroke();

  ctx.lineTo(quadrilateralPoints.D.x, quadrilateralPoints.D.y);
  ctx.stroke();

  ctx.lineTo(quadrilateralPoints.A.x, quadrilateralPoints.A.y);
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
  // A: 1 or 2, B: 3 or 4, C: 5 or 6, D: 7 or 8
  let randomDirection = Math.ceil(Math.random() * 8);

  if (randomDirection < 3) { // A
    pointX += (quadrilateralPoints.A.x - pointX) / 1.5;
    pointY += (quadrilateralPoints.A.y - pointY) / 1.5;
  } else if (randomDirection < 5) { // B
    pointX += (quadrilateralPoints.B.x - pointX) / 1.5;
    pointY += (quadrilateralPoints.B.y - pointY) / 1.5;
  } else if (randomDirection < 7) { // C
    pointX += (quadrilateralPoints.C.x - pointX) / 1.5;
    pointY += (quadrilateralPoints.C.y - pointY) / 1.5;
  } else { //D
    pointX += (quadrilateralPoints.D.x - pointX) / 1.5;
    pointY += (quadrilateralPoints.D.y - pointY) / 1.5;
  }

  ctx.beginPath();
  ctx.arc(pointX, pointY, 3, 0, Math.PI * 2)
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.closePath();
}

drawQuadrilateral()
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
