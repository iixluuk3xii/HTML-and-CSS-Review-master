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
cookieButtonNo.classList.add("btn");
cookieButtonNo.style.marginLeft = "20px";
cookieButtonNo.style.height = "50px";
cookieButtonNo.style.color = "black";
cookieButtonNo.style.backgroundColor = "white";
cookieButtonNo.style.display = "flex";
cookieButtonNo.style.alignItems = "center";
cookieButtonNo.style.cursor = "pointer";

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
}

addCookieToPage();

cookieButtonYes.addEventListener('click', removeCookie);


