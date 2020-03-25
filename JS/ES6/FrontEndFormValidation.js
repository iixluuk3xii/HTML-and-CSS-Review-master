const $name = document.querySelector("#name");
const $email = document.querySelector("#email");
const $phone = document.querySelector("#phone");
const $subject = document.querySelector("#subject");
const $message = document.querySelector("#message");
const $token = document.querySelector("#token");

const $checkRow = document.querySelector(".PP");
const $checkBox = document.querySelector(".pretty-checkbox");
const $checkMark = document.querySelector(".fa-check");

const $form = document.querySelector("#contact-form");
const $button = document.querySelector("#send");

const $fieldsEmpty = document.querySelector("#missing-fields");
const $invalidEmail = document.querySelector("#invalid-email");
const $invalidPhone = document.querySelector("#invalid-phone");
// const $invalidToken = document.querySelector("#invalid-token");

const $success = document.querySelector("#success");

function dislayFlash(flash) {
  flash.style.display = "block";
}

function hideFlash(flash) {
  flash.style.display = "none";
}

function isEmpty(
  field1 = null,
  field2 = null,
  field3 = null,
  field4 = null,
  field5 = null,
  flash,
  form = null
) {
  if (
    field1.value === "" ||
    field2.value === "" ||
    field3.value === "" ||
    field4.value === "" ||
    field5.value === ""
  ) {
    dislayFlash(flash);
  } else {
    hideFlash(flash);
  }
}

function ValidateEmail(field, flash) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (field.value.match(mailformat)) {
    dislayFlash(flash);
  } else {
    hideFlash(flash);
  }
}

function ValidatePhone(field, flash) {
  const phoneformat = /^(?:\(\+?44\)\s?|\+?44 ?)?(?:0|\(0\))?\s?(?:(?:1\d{3}|7[1-9]\d{2}|20\s?[78])\s?\d\s?\d{2}[ -]?\d{3}|2\d{2}\s?\d{3}[ -]?\d{4})$/;
  if (field.value.match(phoneformat)) {
    dislayFlash(flash);
  } else {
    hideFlash(flash);
  }
}

function changefieldValue(field, value) {
  field.value = value;
}

function removeClass(element, className) {
  element.classList.remove(className);
}

function changeOpacity(flash, value) {
  flash.style.opacity = value;
}

function addClass(element, className) {
  element.classList.add(className);
}

$name.addEventListener("click", () => {
  removeClass($name, "invalidField");
});

$email.addEventListener("click", () => {
  removeClass($email, "invalidField");
});

$phone.addEventListener("click", () => {
  removeClass($phone, "invalidField");
});

$subject.addEventListener("click", () => {
  removeClass($subject, "invalidField");
});

$message.addEventListener("click", () => {
  removeClass($message, "invalidField");
});

$form.addEventListener("submit", event => {
  const phoneformat = /^(?:\(\+?44\)\s?|\+?44 ?)?(?:0|\(0\))?\s?(?:(?:1\d{3}|7[1-9]\d{2}|20\s?[78])\s?\d\s?\d{2}[ -]?\d{3}|2\d{2}\s?\d{3}[ -]?\d{4})$/;
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let validPhone = false;
  let validEmail = false;
  let fieldsFilled = false;

  hideFlash($success);

  if ($phone.value.match(phoneformat)) {
    hideFlash($invalidPhone);
    changeOpacity($invalidPhone, "");
    validPhone = true;
  } else {
    event.preventDefault();
    dislayFlash($invalidPhone);
    setTimeout(() => {
      changeOpacity($invalidPhone, "1");
    }, 100);
    addClass($phone, "invalidField");
    validPhone = false;
  }

  if ($email.value.match(mailformat)) {
    hideFlash($invalidEmail);
    changeOpacity($invalidEmail, "");
    validEmail = true;
  } else {
    event.preventDefault();
    setTimeout(() => {
      changeOpacity($invalidEmail, "1");
    }, 100);
    dislayFlash($invalidEmail);
    addClass($email, "invalidField");
    validEmail = false;
  }

  if (
    $name.value == "" ||
    $email.value == "" ||
    $phone.value == "" ||
    $subject.value == "" ||
    $message.value == ""
  ) {
    event.preventDefault();
    if ($name.value == "") {
      addClass($name, "invalidField");
    }
    if ($email.value == "") {
      addClass($email, "invalidField");
    }
    if ($phone.value == "") {
      addClass($phone, "invalidField");
    }
    if ($subject.value == "") {
      addClass($subject, "invalidField");
    }
    if ($message.value == "") {
      addClass($message, "invalidField");
    }
    dislayFlash($fieldsEmpty);
    fieldsFilled = false;
    setTimeout(() => {
      changeOpacity($fieldsEmpty, "1");
    }, 100);
  } else {
    changeOpacity($fieldsEmpty, "");
    hideFlash($fieldsEmpty);
    fieldsFilled = true;
  }

  if (validEmail === true && validPhone === true && fieldsFilled === true) {
    event.preventDefault();
    dislayFlash($success);
    changeOpacity($success, "1");

    changefieldValue($name, "");
    changefieldValue($email, "");
    changefieldValue($phone, "");
    changefieldValue($subject, "");
    changefieldValue($message, "");
    document.querySelector(".check").checked = false;

    validPhone = false;
    validEmail = false;
    fieldsFilled = false;
  }
});
