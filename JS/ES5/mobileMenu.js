"use strict";

// HTML Elements
var menuBtn = document.querySelector('.menu-btn');
var overlay = document.querySelector('#overlay'); // creates the container for the mobile Menu

var slideMenuContainer = document.createElement('div'); // creates the ul that holds each ul in the Menu

var sideMenu = document.createElement('ul'); // creates all the elements within the Training part of the menu

var trainingLi = document.createElement('li');
var trainingUl = document.createElement('ul');
var trainingA = document.createElement('a');
var wdLi = document.createElement('li');
var wdLiA = document.createElement('a'); // creates all the elements within the Company part of the menu

var companyLi = document.createElement('li');
var companyUl = document.createElement('ul');
var companyA = document.createElement('a');
var ocLi = document.createElement('li');
var ocLiA = document.createElement('a');
var ootLi = document.createElement('li');
var ootLiA = document.createElement('a');
var otLi = document.createElement('li');
var otLiA = document.createElement('a');
var ocaLi = document.createElement('li');
var ocaLiA = document.createElement('a');
var obLi = document.createElement('li');
var obLiA = document.createElement('a');
var ogyoLi = document.createElement('li');
var ogyoLiA = document.createElement('a'); // creates all the elements within the Work part of the menu

var workLi = document.createElement('li');
var workUl = document.createElement('ul');
var workA = document.createElement('a');
var csLi = document.createElement('li');
var csLiA = document.createElement('a');
var pLi = document.createElement('li');
var pLiA = document.createElement('a'); // creates all the elements within the knowledge part of the menu

var knowledgeLi = document.createElement('li');
var knowledgeUl = document.createElement('ul');
var knowledgeA = document.createElement('a');
var gLi = document.createElement('li');
var gLiA = document.createElement('a');
var nLi = document.createElement('li');
var nLiA = document.createElement('a');
var iLi = document.createElement('li');
var iLiA = document.createElement('a'); // adds the class sideMenu-container to the mobile menu container

slideMenuContainer.classList.add('sideMenu-container'); // adds the mobile menu into the html at the start of the body

body.prepend(slideMenuContainer); // adds each Li section to the mobile menu

sideMenu.classList.add('sideMenu');
slideMenuContainer.appendChild(sideMenu);
sideMenu.appendChild(trainingLi);
sideMenu.appendChild(companyLi);
sideMenu.appendChild(workLi);
sideMenu.appendChild(knowledgeLi); // adds the content into the training section of the menu

trainingLi.classList.add('training');
trainingLi.appendChild(trainingUl);
trainingUl.appendChild(wdLi);
wdLi.appendChild(wdLiA);
wdLiA.innerHTML = '<i class="fas fa-angle-double-right"></i>WEB DEVELOPER COURSE';
wdLiA.href = '#';
trainingLi.insertBefore(trainingA, trainingLi.childNodes[0]);
trainingA.innerHTML = 'TRAINING';
trainingA.href = '#'; // adds the content into the company section of the menu

companyLi.classList.add('company');
companyLi.appendChild(companyUl);
companyUl.appendChild(ocLi);
ocLi.appendChild(ocLiA);
ocLiA.innerHTML = '<i class="fas fa-angle-double-right"></i>OUR CULTURE';
ocLiA.href = '#';
companyUl.appendChild(ootLi);
ootLi.appendChild(ootLiA);
ootLiA.innerHTML = '<i class="fas fa-angle-double-right"></i>OUR OFFICE TOUR';
ootLiA.href = '#';
companyUl.appendChild(otLi);
otLi.appendChild(otLiA);
otLiA.innerHTML = '<i class="fas fa-angle-double-right"></i>OUR TEAM';
otLiA.href = '#';
companyUl.appendChild(ocaLi);
ocaLi.appendChild(ocaLiA);
ocaLiA.innerHTML = '<i class="fas fa-angle-double-right"></i>OUR CAREERS';
ocaLiA.href = '#';
companyUl.appendChild(obLi);
obLi.appendChild(obLiA);
obLiA.innerHTML = '<i class="fas fa-angle-double-right"></i>OUR BENEFITS';
obLiA.href = '#';
companyUl.appendChild(ogyoLi);
ogyoLi.appendChild(ogyoLiA);
ogyoLiA.innerHTML = '<i class="fas fa-angle-double-right"></i>OUR GREAT YARMOUTH OFFICE';
ogyoLiA.href = '#';
companyLi.insertBefore(companyA, companyLi.childNodes[0]);
companyA.innerHTML = 'OUR COMPANY';
companyA.href = '#'; // adds the content into the work section of the menu

workLi.classList.add('work');
workLi.appendChild(workUl);
workUl.appendChild(csLi);
csLi.appendChild(csLiA);
csLiA.innerHTML = '<i class="fas fa-angle-double-right"></i>CASE STUDIES';
csLiA.href = '#';
workUl.appendChild(pLi);
pLi.appendChild(pLiA);
pLiA.innerHTML = '<i class="fas fa-angle-double-right"></i>PORTFOLIO';
pLiA.href = '#';
workLi.insertBefore(workA, workLi.childNodes[0]);
workA.innerHTML = 'OUR WORK';
workA.href = '#'; // adds the content into the knowledge section of the menu

knowledgeLi.classList.add('knowledge');
knowledgeLi.appendChild(knowledgeUl);
knowledgeUl.appendChild(gLi);
gLi.appendChild(gLiA);
gLiA.innerHTML = '<i class="fas fa-angle-double-right"></i>GUIDES';
gLiA.href = '#';
knowledgeUl.appendChild(nLi);
nLi.appendChild(nLiA);
nLiA.innerHTML = '<i class="fas fa-angle-double-right"></i>NEWS';
nLiA.href = '#';
knowledgeUl.appendChild(iLi);
iLi.appendChild(iLiA);
iLiA.innerHTML = '<i class="fas fa-angle-double-right"></i>INSIGHTS';
iLiA.href = '#';
knowledgeLi.insertBefore(knowledgeA, knowledgeLi.childNodes[0]);
knowledgeA.innerHTML = 'OUR KNOWLEDGE';
knowledgeA.href = '#';

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
  if (typeof callback === 'undefined') { callback = 'default'; } else {callback();};
  
}

function TranslateX350px(element1, element2) {
  element1.style.transform = 'translateX(-350px)';
  element2.style.transform = 'translateX(-350px)';
}

function TranslateX0px(element1, element2) {
  element1.style.transform = '';
  element2.style.transform = '';
} // the clcik event that triggers the menu to open and fades in the overlay


menuBtn.addEventListener('click', function () {
  TranslateX350px(viewPort, overlay);
  setZindexBefore(overlay, '1000', function () {
    return setOpacity(overlay, '1');
  });
}); // the click event that closes the menu and fades out the overlay

overlay.addEventListener('click', function () {
  TranslateX0px(viewPort, overlay);
  setOpacity(overlay, '0', function () {
    return setZindexAfter(overlay, '-1');
  });
}); // ADD HREFS TO YOUR A TAGS