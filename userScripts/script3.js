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
