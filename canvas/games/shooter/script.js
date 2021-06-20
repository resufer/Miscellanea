let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let canWid = document.documentElement.clientWidth;
let canHei = document.documentElement.clientHeight;
canvas.width = canWid;
canvas.height = canHei;

let x = y = 100, direction;

let coordinates = {
  'point1': { x: 100, y: 100 },
  'point2': { x: 120, y: 100 },
  'point3': { x: 120, y: 120 },
  'point4': { x: 100, y: 120 }
};

window.addEventListener('keypress', (e) => {
  let key = e.key.toLocaleLowerCase();

  if (key === 'w') {
    y -= speed;
    direction = 1;
    coordinates.point1.y -= 5;
    coordinates.point2.y -= 5;
    coordinates.point3.y -= 5;
    coordinates.point4.y -= 5;
  } else if (key === 's') {
    y += speed;
    direction = 3;
    coordinates.point1.y += 5;
    coordinates.point2.y += 5;
    coordinates.point3.y += 5;
    coordinates.point4.y += 5;
  } else if (key === 'd') {
    x += speed;
    direction = 2;
    coordinates.point1.x += 5;
    coordinates.point2.x += 5;
    coordinates.point3.x += 5;
    coordinates.point4.x += 5;
  } else if (key === 'a') {
    x -= speed;
    direction = 4;
    coordinates.point1.x -= 5;
    coordinates.point2.x -= 5;
    coordinates.point3.x -= 5;
    coordinates.point4.x -= 5;
  } else if (key === ' ') {
    shot();
  }
})

setInterval(rendering, 10);
function rendering() {
  if (direction === 1 || direction === 4) {
    ctx.clearRect(x, y, 40, 40);
  } else ctx.clearRect(x - 20, y - 20, 40, 40);

  ctx.fillStyle = 'blue';
  ctx.fillRect(x, y, 20, 20);

  if (direction === 1) {
    ctx.fillStyle = 'white';
    ctx.fillRect(x + 5, y, 10, 5);
  } else if (direction === 2) {
    ctx.fillStyle = 'white';
    ctx.fillRect(x + 15, y + 5, 5, 10);
  } else if (direction === 3) {
    ctx.fillStyle = 'white';
    ctx.fillRect(x + 5, y + 15, 10, 5);
  } else if (direction === 4) {
    ctx.fillStyle = 'white';
    ctx.fillRect(x, y + 5, 5, 10);
  }

  ctx.fillStyle = 'orange';
  ctx.fillRect(x + 5, y + 5, 10, 10);
}
