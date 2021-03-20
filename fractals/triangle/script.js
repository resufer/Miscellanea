let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
canvas.width = width;
canvas.height = height;

let trianglePoints = {
  A: { x: 0.25 * width, y: 0.9 * height },
  B: { x: width / 2, y: 0.1 * height },
  C: { x: 0.75 * width, y: 0.9 * height }
}

let pointX, pointY, time = 2000;


let drawBorder = function () {
  let borderSize = 10
  ctx.fillStyle = "Gray";
  ctx.fillRect(0, 0, width, borderSize);
  ctx.fillRect(0, height - borderSize, width, borderSize);
  ctx.fillRect(0, 0, borderSize, height);
  ctx.fillRect(width - borderSize, 0, borderSize, height);
};

let drawTriangle = function () {
  ctx.beginPath();

  ctx.font = "30px Courier";
  ctx.fillStyle = "Green";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText("A", trianglePoints.A.x - 15, trianglePoints.A.y + 5);
  ctx.moveTo(trianglePoints.A.x, trianglePoints.A.y);

  ctx.font = "30px Courier";
  ctx.fillStyle = "Green";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("B", trianglePoints.B.x, trianglePoints.B.y - 10);
  ctx.lineTo(trianglePoints.B.x, trianglePoints.B.y);
  ctx.stroke();

  ctx.font = "30px Courier";
  ctx.fillStyle = "Green";
  ctx.textAlign = "right";
  ctx.textBaseline = "bottom";
  ctx.fillText("C", trianglePoints.C.x + 20, trianglePoints.C.y + 20);
  ctx.lineTo(trianglePoints.C.x, trianglePoints.C.y);
  ctx.stroke();

  ctx.lineTo(trianglePoints.A.x, trianglePoints.A.y);
  ctx.stroke();

  ctx.closePath()
};

let initPoint = function () {
  ctx.beginPath();

  pointX = (0.25 + +(Math.random() * 0.5).toFixed(2)) * width; // x (0.25 - 0.75) * width
  pointY = (0.10 + +(Math.random() * 0.8).toFixed(2)) * height; // y (0.1 - 0.9) * height

  ctx.arc(pointX, pointY, 3, 0, Math.PI * 2)
  ctx.fillStyle = 'black';
  ctx.fill();

  ctx.closePath();
}

let movePoint = function () {
  // A: 1 or 2, B: 3 or 4, C: 5 or 6
  let randomDirection = Math.ceil(Math.random() * 6);

  if (randomDirection < 3) { // A
    pointX += (trianglePoints.A.x - pointX) / 2;
    pointY += (trianglePoints.A.y - pointY) / 2;
  } else if (randomDirection < 5) { // B
    pointX += (trianglePoints.B.x - pointX) / 2;
    pointY += (trianglePoints.B.y - pointY) / 2;
  } else { // C
    pointX += (trianglePoints.C.x - pointX) / 2;
    pointY += (trianglePoints.C.y - pointY) / 2;
  }

  ctx.beginPath();
  ctx.arc(pointX, pointY, 3, 0, Math.PI * 2)
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.closePath();
}

drawBorder()
drawTriangle()
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

