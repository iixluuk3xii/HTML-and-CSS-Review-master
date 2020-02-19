"use strict";

var overflow = document.querySelector('.overflow');
var gallery = document.querySelector('.gallery');
var header = document.querySelector('#header');
var viewPort = document.querySelector('#viewport');
var position = viewPort.scrollTop; // 

function slideElement(element, ammount) {
  setTimeout(function () {
    element.style.transform = 'translateY(' + ammount + '%)';
    element.style.transition = "transform 0.25s";
  }, 200);
} // 


function slideElementDown(element) {
  setTimeout(function () {
    element.style.transform = "";
    element.style.transition = "transform 0.25s";
  }, 200);
}

function slideElementUp(element, callback, ammount) {
  setTimeout(function () {
    element.style.transform = "translateY(" + ammount + "px)";
    element.style.transition = "transform 0.25s";
  }, 200);
  callback();
}

function makeElementSticky(element) {
  setTimeout(function () {
    element.style.position = 'sticky';
    element.style.top = '0';
  }, 450);
}

function removeElementSticky(element) {
  element.style.position = 'static';
}

function hideElement(element) {
  element.style.display = 'hidden';
}

function ShowElement(element) {
  element.style.display = 'block';
}

viewPort.addEventListener('scroll', function () {
  var scroll = viewPort.scrollTop; // if scrolling down move the header into the hidden part of the overflow div

  if (scroll > position) {
    if (scroll > 300) {
      slideElementUp(header, function () {
        return makeElementSticky(overflow);
      }, -212);
    }
  } // if scrolling up slide the header into frame
  else if (scroll < position) {
      slideElementDown(header);

      if (scroll === 0) {
        removeElementSticky(overflow);
      }
    }

  position = scroll;
});