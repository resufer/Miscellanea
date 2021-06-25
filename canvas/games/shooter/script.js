let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let canWid = document.documentElement.clientWidth;
let canHei = document.documentElement.clientHeight;
canvas.width = canWid;
canvas.height = canHei;

let direction, speed = 5;

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
    direction = 1;
    bodyParameters.y -= speed;
  } else if (key === 's' && direction !== 1) {
    direction = 3;
    bodyParameters.y += speed;
  } else if (key === 'd' && direction !== 4) {
    direction = 2;
    bodyParameters.x += speed;
  } else if (key === 'a' && direction !== 2) {
    direction = 4;
    bodyParameters.x -= speed;
  } else if (key === ' ') {
    shot();
  }
})

function rendering() {
  if (direction === 1 || direction === 4) {
    ctx.clearRect(bodyParameters.x, bodyParameters.y, 40, 40);
  } else ctx.clearRect(bodyParameters.x - 20, bodyParameters.y - 20, 40, 40);

  ctx.fillStyle = 'blue';
  ctx.fillRect(bodyParameters.x, bodyParameters.y, 20, 20);

  if (direction === 1) {
    ctx.fillStyle = 'white';
    ctx.fillRect(bodyParameters.x + 5, bodyParameters.y, 10, 5);
  } else if (direction === 2) {
    ctx.fillStyle = 'white';
    ctx.fillRect(bodyParameters.x + 15, bodyParameters.y + 5, 5, 10);
  } else if (direction === 3) {
    ctx.fillStyle = 'white';
    ctx.fillRect(bodyParameters.x + 5, bodyParameters.y + 15, 10, 5);
  } else if (direction === 4) {
    ctx.fillStyle = 'white';
    ctx.fillRect(bodyParameters.x, bodyParameters.y + 5, 5, 10);
  }

  ctx.fillStyle = 'orange';
  ctx.fillRect(bodyParameters.x + 5, bodyParameters.y + 5, 10, 10);
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

function createProblem() {
  let problemParameters = problems();

  ctx.clearRect(problemParameters.x, problemParameters.y, problemParameters.width, problemParameters.height);
  if (randomProblemDirection === 1) {
    problemParameters.x += 1;
  } else if (randomProblemDirection === 2) {
    problemParameters.y += 1;
  } else if (randomProblemDirection === 3) {
    problemParameters.x -= 1;
  } else if (randomProblemDirection === 4) {
    problemParameters.y -= 1;
  }
  ctx.fillRect(problemParameters.x, problemParameters.y, problemParameters.width, problemParameters.height);
  checkCollision(problemParameters);

  if (problemParameters.x + problemParameters.width <= 0 || checkCollision(problemParameters)) {
    clearInterval(problemsInterval);
    ctx.clearRect(problemParameters.x, problemParameters.y, problemParameters.width + 10, problemParameters.height);
  }
}


function checkCollision(problemParameters) {
  try {
    if (
      (bulletParameters.x + bulletParameters.width >= problemParameters.x + 2)
      &&
      (bulletParameters.x + 2 <= problemParameters.x + problemParameters.width)
      &&
      (bulletParameters.y + bulletParameters.height >= problemParameters.y + 2)
      &&
      (bulletParameters.y + 2 <= problemParameters.y + problemParameters.height)
    ) {
      return true
    } else return false
  }
  catch {
    return false
  }
}

setInterval(() => {
  ctx.clearRect(0, 0, canWid, canHei);
  rendering();
  shot();
  createProblem();
}, 1);
