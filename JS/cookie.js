const cookie = document.createElement('DIV');
const cookieText = document.createElement('DIV');
const cookieButtonYes = document.createElement('A');
const cookieButtonNo = document.createElement('A');
const header = document.querySelector('.header');

// Adding Content to the Cookie and styling the elements for the web page -----------------------------------------------------------------------------

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
cookie.style.color = "white";

// Added strong text using innerhtml and the rest of the text to appear in the cookie
cookieText.innerHTML = `<strong>We use cookies on this site to enhance your user experience</strong><br>
                         By clicking any link on this page you are giving consent for us to set cookies.`;

// CookieButtonYes
cookieButtonYes.innerText = "Yes, I agree";
cookieButtonYes.classList.add("btn", "cookieYes");
cookieButtonYes.style.marginLeft = "20px";
cookieButtonYes.style.height = "50px";
cookieButtonYes.style.color = "black";
cookieButtonYes.style.backgroundColor = "white";
cookieButtonYes.style.display = "flex";
cookieButtonYes.style.alignItems = "center";
cookieButtonYes.style.cursor = "pointer";

// cookieButtonNo
cookieButtonNo.innerText = "No, I want to find out more";
cookieButtonNo.classList.add('btn', 'cookieNo');
cookieButtonNo.style.marginLeft = "20px";
cookieButtonNo.style.height = "50px";
cookieButtonNo.style.color = "black";
cookieButtonNo.style.backgroundColor = "white";
cookieButtonNo.style.display = "flex";
cookieButtonNo.style.alignItems = "center";
cookieButtonNo.style.cursor = "pointer";

//----------------------------------------------------------------------------------------------------------------------------------------------------------

// Function definitions -----------------------------------------------------------------------------

// Adding the cookie to the HTML
const addCookieToPage = () => {
    cookie.appendChild(cookieText);
    cookie.appendChild(cookieButtonYes);
    cookie.appendChild(cookieButtonNo);
    header.append(cookie);
}

// removing the cookie from the HTML
const removeCookie = () => {
    const cookie = document.querySelector('.cookie');
    header.removeChild(cookie);
    localStorage.setItem('cookieConsent', 'accepted');
}

// Makes the find out more button open a new window to the google documentation page for cookies
const openCookies = () => window.open('https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage');

// Hover states for the buttons on the cookie
const hoverYes = () => {
    cookieButtonYes.style.backgroundColor = '#848584';
    cookieButtonYes.style.color = '#fff';
}
const reverseYes = () => {
    cookieButtonYes.style.backgroundColor = '#fff';
    cookieButtonYes.style.color = '#000';
}

const hoverNo = () => {
    cookieButtonNo.style.backgroundColor = '#848584';
    cookieButtonNo.style.color = '#fff';
}
const reverseNo = () => {
    cookieButtonNo.style.backgroundColor = '#fff';
    cookieButtonNo.style.color = '#000';
}

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

        addCookieToPage();
        localStorage.setItem('cookieConsent', 'waiting');

    }
});

//adds event listeners to the cookies buttons
cookieButtonYes.addEventListener('click', () => hide(removeCookie, cookie));
cookieButtonNo.addEventListener('click', openCookies);

// hover styles for buttons on cookie, I tried to add them with css and give the buttons classes, but they would work
cookieButtonYes.addEventListener('mouseover', hoverYes);
cookieButtonYes.addEventListener('mouseleave', reverseYes);

cookieButtonNo.addEventListener('mouseover', hoverNo);
cookieButtonNo.addEventListener('mouseleave', reverseNo);

//----------------------------------------------------------------------------------------------------------------------------------------------------------

