let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
canvas.width = width;
canvas.height = height;

let trianglePoints = {
  A: { x: 0, y: height },
  B: { x: 0, y: 0 },
  C: { x: width, y: 0 },
  D: { x: width, y: height }
};

let pointX, pointY, time = 2000;


let drawQuadrilateral = function () {
  ctx.beginPath();

  ctx.moveTo(trianglePoints.A.x, trianglePoints.A.y);

  ctx.lineTo(trianglePoints.B.x, trianglePoints.B.y);
  ctx.stroke();

  ctx.lineTo(trianglePoints.C.x, trianglePoints.C.y);
  ctx.stroke();

  ctx.lineTo(trianglePoints.D.x, trianglePoints.D.y);
  ctx.stroke();

  ctx.lineTo(trianglePoints.A.x, trianglePoints.A.y);
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
    pointX += (trianglePoints.A.x - pointX) / 1.5;
    pointY += (trianglePoints.A.y - pointY) / 1.5;
  } else if (randomDirection < 5) { // B
    pointX += (trianglePoints.B.x - pointX) / 1.5;
    pointY += (trianglePoints.B.y - pointY) / 1.5;
  } else if (randomDirection < 7) { // C
    pointX += (trianglePoints.C.x - pointX) / 1.5;
    pointY += (trianglePoints.C.y - pointY) / 1.5;
  } else { //D
    pointX += (trianglePoints.D.x - pointX) / 1.5;
    pointY += (trianglePoints.D.y - pointY) / 1.5;
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
