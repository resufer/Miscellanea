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
    y -= 5;
    direction = 1;
  } else if (key === 's') {
    y += 5;
    direction = 3;
  } else if (key === 'd') {
    x += 5;
    direction = 2;
  } else if (key === 'a') {
    x -= 5;
    direction = 4;
  } else if (key === ' ') {
    shot();
  }
})
