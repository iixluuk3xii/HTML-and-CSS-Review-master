"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

var cookie = document.createElement('DIV');
var cookieText = document.createElement('DIV');
var cookieButtonYes = document.createElement('A');
var cookieButtonNo = document.createElement('A');
var footer = document.querySelector('.feet');
var body = document.querySelector('body'); // Adding Content to the Cookie and styling the elements for the web page -----------------------------------------------------------------------------
// Styles for the cookie banner and giving it the class of cookie in case i need to target it later in css

cookie.classList.add('cookie');
cookie.style.position = "fixed";
cookie.style.bottom = "0";
cookie.style.zIndex = "500";
cookie.style.backgroundColor = "rgba(51, 54, 69, .90)";
cookie.style.width = "100%";
cookie.style.height = "100px";
cookie.style.display = "flex";
cookie.style.alignItems = "center";
cookie.style.justifyContent = "center";
cookie.style.color = "white"; // Added strong text using innerhtml and the rest of the text to appear in the cookie

cookieText.innerHTML = "<strong>We use cookies on this site to enhance your user experience</strong><br>\n                         By clicking any link on this page you are giving consent for us to set cookies."; // CookieButtonYes

cookieButtonYes.innerText = "Yes, I agree";
cookieButtonYes.classList.add("btn", "cookieYes");
cookieButtonYes.style.marginLeft = "20px";
cookieButtonYes.style.height = "50px";
cookieButtonYes.style.color = "black";
cookieButtonYes.style.backgroundColor = "white";
cookieButtonYes.style.display = "flex";
cookieButtonYes.style.alignItems = "center";
cookieButtonYes.style.cursor = "pointer"; // cookieButtonNo

cookieButtonNo.innerText = "No, I want to find out more";
cookieButtonNo.classList.add('btn', 'cookieNo');
cookieButtonNo.style.marginLeft = "20px";
cookieButtonNo.style.height = "50px";
cookieButtonNo.style.color = "black";
cookieButtonNo.style.backgroundColor = "white";
cookieButtonNo.style.display = "flex";
cookieButtonNo.style.alignItems = "center";
cookieButtonNo.style.cursor = "pointer"; //----------------------------------------------------------------------------------------------------------------------------------------------------------
// Function definitions -----------------------------------------------------------------------------
// Adding the cookie to the HTML

var addCookieToPage = function addCookieToPage() {
  cookie.appendChild(cookieText);
  cookie.appendChild(cookieButtonYes);
  cookie.appendChild(cookieButtonNo);
  body.append(cookie);
}; // removing the cookie from the HTML


var removeCookie = function removeCookie() {
  var cookie = document.querySelector('.cookie');
  body.removeChild(cookie);
  localStorage.setItem('cookieConsent', 'accepted');
}; // Makes the find out more button open a new window to the google documentation page for cookies


var openCookies = function openCookies() {
  return window.open('https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage');
}; // Hover states for the buttons on the cookie


var hoverYes = function hoverYes() {
  cookieButtonYes.style.backgroundColor = '#848584';
  cookieButtonYes.style.color = '#fff';
};

var reverseYes = function reverseYes() {
  cookieButtonYes.style.backgroundColor = '#fff';
  cookieButtonYes.style.color = '#000';
};

var hoverNo = function hoverNo() {
  cookieButtonNo.style.backgroundColor = '#848584';
  cookieButtonNo.style.color = '#fff';
};

var reverseNo = function reverseNo() {
  cookieButtonNo.style.backgroundColor = '#fff';
  cookieButtonNo.style.color = '#000';
}; // function that can be used to target elements and make them hidden


var hide = function hide(x, element) {
  element.style.opacity = '0';
  element.style.visibility = 'hidden';
  element.style.transition = 'visibility 0s 1s, opacity 1s linear';
  setTimeout(function () {
    return x();
  }, 1000);
}; //----------------------------------------------------------------------------------------------------------------------------------------------------------
// event listeners -----------------------------------------------------------------------------
// Checks to see if the user has accepted the cookies or not


document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem('cookieConsent') != 'accepted') {
    addCookieToPage();
    localStorage.setItem('cookieConsent', 'waiting');
  }
}); //adds event listeners to the cookies buttons
// document.addEventListener('click', () => hide(removeCookie, cookie));

cookieButtonYes.addEventListener('click', function () {
  return hide(removeCookie, cookie);
});
cookieButtonNo.addEventListener('click', openCookies); // hover styles for buttons on cookie, I tried to add them with css and give the buttons classes, but they would work

cookieButtonYes.addEventListener('mouseover', hoverYes);
cookieButtonYes.addEventListener('mouseleave', reverseYes);
cookieButtonNo.addEventListener('mouseover', hoverNo);
cookieButtonNo.addEventListener('mouseleave', reverseNo); //----------------------------------------------------------------------------------------------------------------------------------------------------------