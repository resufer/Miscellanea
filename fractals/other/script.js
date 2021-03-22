let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
canvas.width = width;
canvas.height = height;

let trianglePoints1 = {
  A: { x: 0.10 * width, y: 0.50 * height },
  B: { x: 0.225 * width, y: 0.10 * height },
  C: { x: 0.45 * width, y: 0.50 * height }
};

let trianglePoints2 = {
  A: { x: 0.55 * width, y: 0.90 * height },
  B: { x: 0.675 * width, y: 0.50 * height },
  C: { x: 0.90 * width, y: 0.90 * height }
};

let pointX, pointY, time = 2000;


let drawTriangles = function (triangle) {
  ctx.beginPath();
  ctx.moveTo(triangle.A.x, triangle.A.y);
  ctx.lineTo(triangle.B.x, triangle.B.y);
  ctx.stroke();
  ctx.lineTo(triangle.C.x, triangle.C.y);
  ctx.stroke();
  ctx.lineTo(triangle.A.x, triangle.A.y);
  ctx.stroke();
  ctx.closePath()
};

drawTriangles(trianglePoints1);
drawTriangles(trianglePoints2);


let initPoint = function () {
  ctx.beginPath();

  pointX = ((Math.random()).toFixed(2)) * width;
  pointY = ((Math.random()).toFixed(2)) * height;

  ctx.arc(pointX, pointY, 3, 0, Math.PI * 2);
  ctx.fillStyle = 'black';
  ctx.fill();

  ctx.closePath();
};

let movePoint = function () {
  // A: 1 or 2, B: 3 or 4, C: 5 or 6, A2: 7, B2: 8, C2 : 9
  let randomDirection = Math.ceil(Math.random() * 9);

  if (randomDirection < 3) { // A
    pointX += (trianglePoints1.A.x - pointX) / 1.25;
    pointY += (trianglePoints1.A.y - pointY) / 1.25;
  } else if (randomDirection < 5) { // B
    pointX += (trianglePoints1.B.x - pointX) / 1.25;
    pointY += (trianglePoints1.B.y - pointY) / 1.25;
  } else if (randomDirection < 7) { // C
    pointX += (trianglePoints1.C.x - pointX) / 1.25;
    pointY += (trianglePoints1.C.y - pointY) / 1.25;
  } else if (randomDirection === 7) { // A2
    pointX += (trianglePoints2.A.x - pointX) / 1.25;
    pointY += (trianglePoints2.A.y - pointY) / 1.25;
  } else if (randomDirection === 8) { // B2
    pointX += (trianglePoints2.B.x - pointX) / 1.25;
    pointY += (trianglePoints2.B.y - pointY) / 1.25;
  } else { // C2
    pointX += (trianglePoints2.C.x - pointX) / 1.25;
    pointY += (trianglePoints2.C.y - pointY) / 1.25;
  }

  ctx.beginPath();
  ctx.arc(pointX, pointY, 3, 0, Math.PI * 2)
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.closePath();
}

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
