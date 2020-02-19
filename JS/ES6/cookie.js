const footer = document.querySelector('.feet');
const body = document.querySelector('body');
const cookie = document.querySelector('.cookie');
const cookieButtonYes = document.querySelector('.cookieYes');
const cookieButtonNo = document.querySelector('.cookieNo');

// removing the cookie from the HTML
const removeCookie = () => {
    body.removeChild(cookie);
    localStorage.setItem('cookieConsent', 'accepted');
}

// Makes the find out more button open a new window to the google documentation page for cookies
const openCookies = () => window.open('https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage');

// function that can be used to target elements and make them hidden
const hide = (x ,element) => {
    element.style.opacity = '0';
    element.style.visibility = 'hidden';
    element.style.transition = 'visibility 0s 1s, opacity 1s linear';
    setTimeout(() => {
        return x();
    },1000)
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------

// event listeners -----------------------------------------------------------------------------

// Checks to see if the user has accepted the cookies or not
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('cookieConsent') != 'accepted') {

        localStorage.setItem('cookieConsent', 'waiting');

    }
});

//adds event listeners to the cookies buttons

cookieButtonYes.addEventListener('click', () => hide(removeCookie, cookie));
cookieButtonNo.addEventListener('click', openCookies);


//----------------------------------------------------------------------------------------------------------------------------------------------------------

