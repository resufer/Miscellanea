let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let canWid = document.documentElement.clientWidth;
let canHei = document.documentElement.clientHeight;
canvas.width = canWid;
canvas.height = canHei;

let x = y = 100, direction, speed = 5;

let bodyParameters = {
  x: 100,
  y: 100,
  width: 20,
  height: 20
}

let bulletParameters;
function getBulletParameters() {
  return {
    x: bodyParameters.x + 5,
    y: bodyParameters.y + 5,
    width: 10,
    height: 10
  }
}

window.addEventListener('keypress', (e) => {
  let key = e.key.toLocaleLowerCase();

  if (key === 'w' && direction !== 3) {
    y -= speed;
    direction = 1;
    bodyParameters.y -= speed;
  } else if (key === 's' && direction !== 1) {
    y += speed;
    direction = 3;
    bodyParameters.y += speed;
  } else if (key === 'd' && direction !== 4) {
    x += speed;
    direction = 2;
    bodyParameters.x += speed;
  } else if (key === 'a' && direction !== 2) {
    x -= speed;
    direction = 4;
    bodyParameters.x -= speed;
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


function shot() {
  let intervalShot;
  let bulletY = y + 5;
  let bulletX = x + 5;
  if (direction === 1) {    
    intervalShot = setInterval(() => {      
      ctx.fillStyle = 'orange';
      bulletY -= speed;
      bulletCoordinates.map(coor => coor.y -= speed);
      ctx.clearRect(bulletX, bulletY + speed, 10, 10);
      ctx.fillRect(bulletX, bulletY, 10, 10);
    }, 15);
  } else if (direction === 2) {
    intervalShot = setInterval(() => {
      ctx.fillStyle = 'orange';
      bulletX += speed;
      bulletCoordinates.map(coor => coor.x += speed);
      ctx.clearRect(bulletX - speed, bulletY, 10, 10);
      ctx.fillRect(bulletX, bulletY, 10, 10);
    }, 15);
  } else if (direction === 3) {
    intervalShot = setInterval(() => {
      ctx.fillStyle = 'orange';
      bulletY += speed;
      bulletCoordinates.map(coor => coor.y += speed);
      ctx.clearRect(bulletX, bulletY - speed, 10, 10);
      ctx.fillRect(bulletX, bulletY, 10, 10);
    }, 15);
  } else if (direction === 4) {
    intervalShot = setInterval(() => {
      ctx.fillStyle = 'orange';
      bulletX -= speed;
      bulletCoordinates.map(coor => coor.x -= speed);
      ctx.clearRect(bulletX + speed, bulletY, 10, 10);
      ctx.fillRect(bulletX, bulletY, 10, 10);
    }, 15);
  }
  setTimeout(() => {
    clearInterval(intervalShot);
    bulletCoordinates = getBulletCoordinates();
    ctx.clearRect(bulletX, bulletY, 10, 10);
  }, 1200);
}


function problems() {
  let problemX = canWid;
  let problemY = 200;
  let problemWid = 50;
  let problemHei = 250;

  let problemCoordinates = [
    { x: problemX, y: problemY },
    { x: problemX + problemWid, y: problemY },
    { x: problemX + problemWid, y: problemY + problemHei },
    { x: problemX, y: problemY + problemHei }
  ];

  let problemsInterval = setInterval(() => {
    problemX -= 5;
    ctx.clearRect(problemX + 10, problemY, problemWid, problemHei);
    ctx.fillRect(problemX, problemY, problemWid, problemHei);
    problemCoordinates.map(coor => coor.x -= 5);
    checkCollision(problemCoordinates)

    if (problemX + problemWid <= 0 || checkCollision(problemCoordinates)) {
      clearInterval(problemsInterval);
      ctx.clearRect(problemX, problemY, problemWid, problemHei);
    }
  }, 50);
}
problems(); setInterval(problems, 2000)


function checkCollision(problemCoordinates) {
  if (problemCoordinates[0].x <= bulletCoordinates[0].x * 2 - bulletCoordinates[1].x &&
    problemCoordinates[0].y <= bulletCoordinates[0].y * 2 - bulletCoordinates[1].y &&
    problemCoordinates[1].x <= bulletCoordinates[1].x && problemCoordinates[1].y <= bulletCoordinates[1].y) {
    return true
  }
}
