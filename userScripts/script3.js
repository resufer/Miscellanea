// ==UserScript==
// @name         Delete
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Да
// @author       Nan
// @match        *://vk.com/*
// @match        *://yandex.ru/*
// @match        *://www.heroku.com/*
// @grant        none
// ==/UserScript==
let keys = [];
let location = document.body;



window.addEventListener('keypress', (e) => {
  e.key = e.key.toLocaleLowerCase();
  keys.push(e.key);
  //console.log(e.key)
  if (keys.length > 6) {
    keys.shift();
    initialize();
  }
})




function initialize() {
  console.log(keys);
  if ('delete' === keys.join('')) {
    let run = confirm('Запустить удаление?');
    if (run) deleteAnyElement();
  }
}



function deleteAnyElement() {
  let currentLocation = location.href;
  let resursionChilds = function (el) {
    for (let i = 0; i < el.childNodes.length; i++) {
      if (el.childNodes[i].localName !== undefined) {
        el.childNodes[i].addEventListener('contextmenu', (e) => {
          e.preventDefault();
          e.stopPropagation();
          el.childNodes[i].remove();
        });
        resursionChilds(el.childNodes[i])
      }
    }
    setInterval(observer, 3000);
  }
  resursionChilds(location);

  function observer() {
    if (location.href !== currentLocation) resursionChilds(location);
    currentLocation = location.href;
  }
}
