// ==UserScript==
// @name         Back vk
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  I love recursion!
// @author       Yes
// @match        https://vk.com/audios
// @grant        none
// ==/UserScript==

let timerBG;
let initializationBG = function() {
  try {
  document.querySelector('.ap_layer_wrap').style.backgroundImage = "url('url')";
  if (document.querySelector('.ap_layer_wrap').style.backgroundImage == "url('url')") clearInterval(timerBG)
  }
  catch{}
}
timerBG = setInterval(initializationBG, 100);


let timerSpecial;
let specialEdition = function() {
  try {
    if (document.querySelector('.ap_layer__content').firstChild.nextSibling.getAttribute('data-title') === 'Name') {
      document.querySelector('.ap_layer_wrap').style.background = "url('url') no-repeat center center / cover";
      clearInt();
    }
    else if (document.querySelector('.ap_layer__content').firstChild.nextSibling.getAttribute('data-title') === 'Name') {
      document.querySelector('.ap_layer_wrap').style.background = "url('url') no-repeat center center / cover";
      clearInt();
    }
    else if (document.querySelector('.ap_layer__content').firstChild.nextSibling.getAttribute('data-title') === 'Name') {
      document.querySelector('.ap_layer_wrap').style.background = "url('url') no-repeat center center / cover";
      clearInt();
    }
    else if (document.querySelector('.ap_layer__content').firstChild.nextSibling.getAttribute('data-title') === 'Name') {
      document.querySelector('.ap_layer_wrap').style.background = "url('url') no-repeat center center / cover";
      clearInt();
    }
    else if (document.querySelector('.ap_layer__content').firstChild.nextSibling.getAttribute('data-title') === 'Name') {
      document.querySelector('.ap_layer_wrap').style.background = "url('url') no-repeat center center / cover";
      clearInt();
    }
    else {
      document.querySelector('.ap_layer_wrap').style.backgroundImage = "url('url')";
      clearInt();
    }
  }
  catch {}
};
timerSpecial = setInterval(specialEdition, 1e3);

let clearInt = function() {
  clearInterval(timerBG);
}
