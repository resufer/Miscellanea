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
