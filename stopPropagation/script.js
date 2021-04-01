let main = document.querySelector('.main');
let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');
let blue = document.querySelector('.blue');
let purple = document.querySelector('.purple');
let black = document.querySelector('.black');


let allColors = ['rgb(255, 255, 255)', 'rgb(255, 0, 0)', 'rgb(252, 193, 2)', 'rgb(0, 128, 0)',
  'rgb(0, 0, 255)', 'rgb(128, 0, 128)', 'rgb(0, 0, 0)'];
let colors = allColors;


let inputRange = document.getElementById('range');
let inputValue;
inputRange.onmousedown = (e) => {
  inputValue = inputRange.value;
  inputRange.onmouseup = (e) => {
    inputValue = inputRange.value;
    colors = allColors.slice(0, allColors.length + 1 - inputValue);
  };
};


let checkboxState = false;
let checkbox = document.getElementById('checkbox');

checkbox.onclick = () => {
  checkboxState = !checkboxState;
};


let addClicksEvent = (arr) => {
  arr[0].onclick = (e) => {
    let currentColor = getComputedStyle(arr[0])['background-color'];
    let index = colors.indexOf(currentColor);
    if (index === colors.length - 1) {
      index = -1;
    }
    arr[0].style.backgroundColor = colors[index + 1];

    if (checkboxState) e.stopPropagation();
  };

  if (arr.length === 1) {
    return;
  } else {
    return clickOn(arr.slice(1));
  }
};
addClicksEvent([main, red, yellow, green, blue, purple, black]);
