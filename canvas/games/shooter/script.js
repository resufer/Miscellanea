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
  let directionShot = direction;
  bulletParameters = getBulletParameters();
  ctx.fillStyle = 'orange';
    if (directionShot === 1) {
      bulletParameters.y -= speed;
    } else if (directionShot === 2) {
      bulletParameters.x += speed;
    } else if (directionShot === 3) {
      bulletParameters.y += speed;
    } else if (directionShot === 4) {
      bulletParameters.x -= speed;
    }
    
  ctx.fillRect(bulletParameters.x, bulletParameters.y, bulletParameters.width, bulletParameters.height);
}


function problems() {
  let randomProblemDirection = Math.floor(Math.random() * 5);
  let x, y;
  if (randomProblemDirection === 1) {
    x = 0;
    y = Math.floor(Math.random() * 500);
  } else if (randomProblemDirection === 2) {
    x = Math.floor(Math.random() * 800);
    y = 0;
  } else if (randomProblemDirection === 3) {
    x = canWid;
    y = Math.floor(Math.random() * 500);
  } else if (randomProblemDirection === 4) {
    x = Math.floor(Math.random() * 800);
    y = canHei;
  }
  let width = Math.floor(Math.random() * 300 + 20);
  let height = Math.floor(Math.random() * 300 + 20);

  let problemParameters = {
    x, y, width, height
  };

  return problemParameters;
}


function checkCollision(problemCoordinates) {
  if (problemCoordinates[0].x <= bulletCoordinates[0].x * 2 - bulletCoordinates[1].x &&
    problemCoordinates[0].y <= bulletCoordinates[0].y * 2 - bulletCoordinates[1].y &&
    problemCoordinates[1].x <= bulletCoordinates[1].x && problemCoordinates[1].y <= bulletCoordinates[1].y) {
    return true
  }
}
