<?php

include('newsCardsDBRequest.php');
include('Session.php');

$name = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$number = isset($_POST['number']) ? $_POST['number'] : '';
$subject = isset($_POST['subject']) ? $_POST['subject'] : '';
$message = isset($_POST['message']) ? $_POST['message'] : '';
$testnumber = isset($_POST['number']) ? true : false;

function validatePhone($phone)
{
    if (preg_match('/^\+[0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{4}$/', $phone)) {
        return true;
    } else {
        return false;
    }
}

if ($testnumber === true) {
    $matchNumber = $_POST['number'];
} else {
    $matchNumber = '';
}

$matchNumber = '';

if (empty($_POST['marketing'])) {
    $marketing = 0;
} else {
    $marketing = $_POST['marketing'];
}

$ok = true;
$isName = true;
$isEmail = true;
$isPhone = true;
$isSubject = true;
$isMessage = true;

if (!isset($name) || empty($name)) {
    $ok = false;
    $isName = false;
}

if (!isset($email) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $ok = false;
    $isEmail = false;
}

if (!isset($number) || empty($number) || validatePhone($number)) {
    $ok = false;
    $isPhone = false;
}

if (!isset($subject) || empty($subject)) {
    $ok = false;
    $isSubject = false;
}

if (!isset($message) || empty($message)) {
    $ok = false;
    $isMessage = false;
}

if ($ok) {
    //Insert Query
    $sql = "INSERT INTO contactmessages(name, email, phone, subject, message, marketing)   
                    values(?, ?, ?, ?, ?, ?)";

    $values = [$name, $email, $number, $subject, $message, $marketing];
    $insertStm = $pdo->prepare($sql);
    $insertStm->execute($values);
}

echo json_encode(
    array(
        'ok' => $ok,
        'name' => $isName,
        'email' => $isEmail,
        'number' => $isPhone,
        'subject' => $isSubject,
        'message' => $isMessage,
        'tick' => $marketing,
    )
);
