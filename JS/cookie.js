const cookie = document.createElement('DIV');
const cookieText = document.createElement('DIV');
const cookieButtonYes = document.createElement('A');
const cookieButtonNo = document.createElement('A');
const head = document.querySelector('.header');

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

cookieText.innerHTML = `<strong>We use cookies on this site to enhance your user experience</strong><br>
                         By clicking any link on this page you are giving consent for us to set cookies.`;

cookieButtonYes.innerText = "Yes, I agree";
cookieButtonYes.classList.add("btn");
cookieButtonYes.style.marginLeft = "20px";
cookieButtonYes.style.height = "50px";
cookieButtonYes.style.color = "black";
cookieButtonYes.style.backgroundColor = "white";
cookieButtonYes.style.display = "flex";
cookieButtonYes.style.alignItems = "center";
cookieButtonYes.style.cursor = "pointer";

cookieButtonNo.innerText = "No, I want to find out more";
cookieButtonNo.classList.add("btn");
cookieButtonNo.style.marginLeft = "20px";
cookieButtonNo.style.height = "50px";
cookieButtonNo.style.color = "black";
cookieButtonNo.style.backgroundColor = "white";
cookieButtonNo.style.display = "flex";
cookieButtonNo.style.alignItems = "center";
cookieButtonNo.style.cursor = "pointer";

cookie.appendChild(cookieText);
cookie.appendChild(cookieButtonYes);
cookie.appendChild(cookieButtonNo);

head.append(cookie);



