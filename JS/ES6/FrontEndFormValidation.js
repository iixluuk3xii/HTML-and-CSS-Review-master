const $name = document.querySelector("#name");
const $email = document.querySelector("#email");
const $phone = document.querySelector("#phone");
const $subject = document.querySelector("#subject");
const $message = document.querySelector("#message");
const $token = document.querySelector("#token");

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

$form.addEventListener("submit", event => {
  const phoneformat = /^(?:\(\+?44\)\s?|\+?44 ?)?(?:0|\(0\))?\s?(?:(?:1\d{3}|7[1-9]\d{2}|20\s?[78])\s?\d\s?\d{2}[ -]?\d{3}|2\d{2}\s?\d{3}[ -]?\d{4})$/;
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if ($phone.value.match(phoneformat)) {
    hideFlash($invalidPhone);
  } else {
    event.preventDefault();
    dislayFlash($invalidPhone);
  }

  if ($email.value.match(mailformat)) {
    hideFlash($invalidEmail);
  } else {
    event.preventDefault();
    dislayFlash($invalidEmail);
  }

  if (
    $name.value == "" ||
    $email.value == "" ||
    $phone.value == "" ||
    $subject.value == "" ||
    $message.value == ""
  ) {
    event.preventDefault();
    dislayFlash($fieldsEmpty);
  } else {
    hideFlash($fieldsEmpty);
  }
});
