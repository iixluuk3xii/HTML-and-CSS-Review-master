// DOM Elements
const $name = document.querySelector("#name");
const $email = document.querySelector("#email");
const $number = document.querySelector("#number");
const $subject = document.querySelector("#subject");
const $message = document.querySelector("#message");

const $checkRow = document.querySelector(".PP");
const $realCheckBox = document.querySelector(".check");
let $isChecked = false;
const $checkBox = document.querySelector(".pretty-checkbox");

const $form = document.querySelector("#contact-form");
const $button = document.querySelector("#send");

const $fieldsEmpty = document.querySelector("#missing-fields");
const $invalidEmail = document.querySelector("#invalid-email");
const $invalidPhone = document.querySelector("#invalid-phone");
const $invalidServer = document.querySelector("#invalid-server");

const $success = document.querySelector("#success");

// Functions to add, remove and toggle classes
function addClass(element, className) {
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}

function toggleClass(element, className) {
  element.classList.toggle(className);
}

// Function to hide and show flash messages 
function dislayFlash(flash) {
  flash.style.display = "block";
}

function hideFlash(flash) {
  flash.style.display = "none";
}

function changeOpacity(flash, value) {
  flash.style.opacity = value;
}

// Function for emptying the fields after submission/Change the values of the input 
function changefieldValue(field, value) {
  field.value = value;
}

// Simple click event listerner Function
function addEventListener(
  element,
  event,
  callback,
  callback2 = null,
  callBackParam1 = null,
  callBackParam2 = null,
  callBackParam3 = null
) {
  element.addEventListener(event, () => {
    callback(callBackParam1, callBackParam2, callBackParam3);
    callback2();
  });
}

// Function to check if the checkbox is ticked or not
function isChecked() {
  if ($checkBox.classList.contains("ticked")) {
    $realCheckBox.checked = true;
    return ($isChecked = 1);
  } else {
    $realCheckBox.checked = false;
    return ($isChecked = 0);
  }
}

// Validation to check if fields are empty
function isEmpty(field){
  if (field.value === "") {
    return false;
  } else {
    return true;
  }
}

// Function to check if an email is valid
function ValidateEmail(field) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (field.value.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

// Function to check if the phone number is valid 
function ValidatePhone(field) {
  const phoneformat = /^(?:\(\+?44\)\s?|\+?44 ?)?(?:0|\(0\))?\s?(?:(?:1\d{3}|7[1-9]\d{2}|20\s?[78])\s?\d\s?\d{2}[ -]?\d{3}|2\d{2}\s?\d{3}[ -]?\d{4})$/;
  if (field.value.match(phoneformat)) {
    return true;
  } else {
    return false;
  }
}

// Blank function to stop errors being thrown in callback functions 
function doNothing() {}

// Function to decide what messages are shown based on the response of the AJAX request 
function handleResponse(responseObject) {
  if (responseObject.ok) {
    dislayFlash($success);
    hideFlash($invalidServer);
    setTimeout(() => {
      changeOpacity($success, "1");
      changeOpacity($invalidEmail, "0");
    }, 100);
  } else {
    dislayFlash($invalidServer);
      hideFlash($success);
      setTimeout(() => {
        changeOpacity($success, "0");
        changeOpacity($invalidServer, "1");
      }, 100);
  }
}

// Ajax request function for when the form is submitted
function submitForm(callback) {
  const request = new XMLHttpRequest();
  request.withCredentials = true;
  request.onload = () => {
    let responseObject = null;

    try {
      responseObject = JSON.parse(request.responseText);
      console.log("object created successfully");
      console.log(responseObject);
    } catch (e) {
      console.log(e.name);
      console.log(e.message);
    }

    if (responseObject) {
      handleResponse(responseObject);
      callback();
    }
  };

  const requestData = `name=${$name.value}&email=${$email.value}&number=${$number.value}&subject=${$subject.value}&message=${$message.value}&marketing=${$isChecked}`;

  request.open("post", "../../INC/contactAction.php");

  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  request.send(requestData);
}

// Function that resets the form 
function clearForm() {
  changefieldValue($name, "");
  changefieldValue($email, "");
  changefieldValue($number, "");
  changefieldValue($subject, "");
  changefieldValue($message, "");

  removeClass($checkBox, "ticked");
  $realCheckBox.checked = false;
}

// Event listeners to remove the red glow on invalid fields once they are clicked to be edited
addEventListener($name, "click", removeClass, doNothing, $name, "invalidField");
addEventListener(
  $email,
  "click",
  removeClass,
  doNothing,
  $email,
  "invalidField"
);
addEventListener(
  $number,
  "click",
  removeClass,
  doNothing,
  $number,
  "invalidField"
);
addEventListener(
  $subject,
  "click",
  removeClass,
  doNothing,
  $subject,
  "invalidField"
);
addEventListener(
  $message,
  "click",
  removeClass,
  doNothing,
  $message,
  "invalidField"
);
addEventListener(
  $checkRow,
  "click",
  toggleClass,
  isChecked,
  $checkBox,
  "ticked"
);

// Event listener for when the submit button is pressed 
$button.addEventListener("click", event => {
  event.preventDefault();
  hideFlash($success);

  if (ValidatePhone($number)) {
    hideFlash($invalidPhone);
    changeOpacity($invalidPhone, "");
  } else {
    dislayFlash($invalidPhone);
    setTimeout(() => {
      changeOpacity($invalidPhone, "1");
    }, 100);
    addClass($number, "invalidField");
  }

  if (ValidateEmail($email)) {
    hideFlash($invalidEmail);
    changeOpacity($invalidEmail, "");
  } else {
    setTimeout(() => {
      changeOpacity($invalidEmail, "1");
    }, 100);
    dislayFlash($invalidEmail);
    addClass($email, "invalidField");
  }

  if (isEmpty($name) && isEmpty($email) && isEmpty($number) && isEmpty($subject) && isEmpty($message)) {
    changeOpacity($fieldsEmpty, "");
    hideFlash($fieldsEmpty);
    console.log('fields are all filled');
  } else {
    if (isEmpty($name)) {
      addClass($name, "invalidField");
    }
    if (isEmpty($email)) {
      addClass($email, "invalidField");
    }
    if (isEmpty($number)) {
      addClass($number, "invalidField");
    }
    if (isEmpty($subject)) {
      addClass($subject, "invalidField");
    }
    if (isEmpty($message)) {
      addClass($message, "invalidField");
    }
    dislayFlash($fieldsEmpty);
    setTimeout(() => {
      changeOpacity($fieldsEmpty, "1");
    }, 100);
  }

  if (
    ValidateEmail($email) &&
    ValidatePhone($number) &&
    isEmpty($number, $email, $name, $subject, $message)
  ) {
    submitForm(clearForm);
  }
});
