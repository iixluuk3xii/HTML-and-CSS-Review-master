"use strict";

var footer = document.querySelector('.feet');
var body = document.querySelector('body');
var cookie = document.querySelector('.cookie');
var cookieButtonYes = document.querySelector('.cookieYes');
var cookieButtonNo = document.querySelector('.cookieNo'); // removing the cookie from the HTML

var removeCookie = function removeCookie() {
  body.removeChild(cookie);
  localStorage.setItem('cookieConsent', 'accepted');
}; // Makes the find out more button open a new window to the google documentation page for cookies


var openCookies = function openCookies() {
  return window.open('https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage');
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
    localStorage.setItem('cookieConsent', 'waiting');
  }
}); //adds event listeners to the cookies buttons

cookieButtonYes.addEventListener('click', function () {
  return hide(removeCookie, cookie);
});
cookieButtonNo.addEventListener('click', openCookies); //----------------------------------------------------------------------------------------------------------------------------------------------------------