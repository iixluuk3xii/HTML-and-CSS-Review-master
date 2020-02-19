"use strict";

// HTML Elements
var menuBtn = document.querySelector('.menu-btn');
var overlay = document.querySelector('#overlay');
var viewPort = document.querySelector('#viewport');

function setZindexBefore(element, value, callback) {
  element.style.zIndex = value;
  callback();
}

function setZindexAfter(element, value) {
  setTimeout(function () {
    element.style.zIndex = value;
  }, 500);
}

function setOpacity(element, value, callback) {
  element.style.opacity = value;
  callback();
}

function toggleSlide(element1, element2) {
  element1.classList.toggle("menu-slide");
  element2.classList.toggle("menu-slide");
} // the clcik event that triggers the menu to open and fades in the overlay


menuBtn.addEventListener('click', function () {
  menuBtn.classList.add('is-active');
  toggleSlide(viewPort, overlay);
  setZindexBefore(overlay, '1000', function () {
    return setOpacity(overlay, '1');
  });
}); // the click event that closes the menu and fades out the overlay

overlay.addEventListener('click', function () {
  menuBtn.classList.remove('is-active');
  toggleSlide(viewPort, overlay);
  setOpacity(overlay, '0', function () {
    return setZindexAfter(overlay, '-1');
  });
});