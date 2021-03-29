let main = document.querySelector('.main');
let red = document.querySelector('.red'); window.red = red
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');
let blue = document.querySelector('.blue');
let purple = document.querySelector('.purple');
let black = document.querySelector('.black');


let colors = ['rgb(255, 255, 255)', 'rgb(255, 0, 0)', 'rgb(252, 193, 2)', 'rgb(0, 128, 0)',
  'rgb(0, 0, 255)', 'rgb(128, 0, 128)', 'rgb(0, 0, 0)'];


main.onclick = (e) => {
  let currentColor = getComputedStyle(main)['background-color'];
  let index = colors.indexOf(currentColor);
  if (index === colors.length - 1) {
    index = -1;
  }
  main.style.backgroundColor = colors[index + 1]
}


red.onclick = (e) => {
  let currentColor = getComputedStyle(red)['background-color'];
  let index = colors.indexOf(currentColor);
  if (index === colors.length - 1) {
    index = -1;
  }
  red.style.backgroundColor = colors[index + 1]
}


yellow.onclick = (e) => {
  let currentColor = getComputedStyle(yellow)['background-color'];
  let index = colors.indexOf(currentColor);
  if (index === colors.length - 1) {
    index = -1;
  }
  yellow.style.backgroundColor = colors[index + 1]
}


green.onclick = (e) => {
  let currentColor = getComputedStyle(green)['background-color'];
  let index = colors.indexOf(currentColor);
  if (index === colors.length - 1) {
    index = -1;
  }
  green.style.backgroundColor = colors[index + 1]
}


blue.onclick = (e) => {
  let currentColor = getComputedStyle(blue)['background-color'];
  let index = colors.indexOf(currentColor);
  if (index === colors.length - 1) {
    index = -1;
  }
  blue.style.backgroundColor = colors[index + 1]
}


purple.onclick = (e) => {
  let currentColor = getComputedStyle(purple)['background-color'];
  let index = colors.indexOf(currentColor);
  if (index === colors.length - 1) {
    index = -1;
  }
  purple.style.backgroundColor = colors[index + 1]
}


black.onclick = (e) => {
  let currentColor = getComputedStyle(black)['background-color'];
  let index = colors.indexOf(currentColor);
  if (index === colors.length - 1) {
    index = -1;
  }
  black.style.backgroundColor = colors[index + 1]
}
