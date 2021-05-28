// ==UserScript==
// @name         Blacky
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Yes
// @author       No
// @match        *://your.com/*
// @grant        none
// ==/UserScript==

document.body.style.cursor = "url('https://your choice.gif'), grab";

let currentLocation = location.href;
let documentBody = document.body;
let resursionChilds = function(el) {
  for (let i = 0; i < el.childNodes.length; i++) {
    if (el.childNodes[i].localName !== undefined) {el.childNodes[i].style.cursor = "url('https://your choice.gif'), auto"; resursionChilds(el.childNodes[i])}
  }
  setInterval(observer, 3000);
}
resursionChilds(documentBody);

function observer() {
  if (location.href !== currentLocation) resursionChilds(documentBody);
    currentLocation = location.href;
}
