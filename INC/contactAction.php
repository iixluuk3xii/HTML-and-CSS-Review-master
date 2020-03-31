<?php
// Files to be included 
include('newsCardsDBRequest.php');
include('Session.php');

// Variables
$name = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$number = isset($_POST['number']) ? $_POST['number'] : '';
$subject = isset($_POST['subject']) ? $_POST['subject'] : '';
$message = isset($_POST['message']) ? $_POST['message'] : '';
$testnumber = isset($_POST['number']) ? true : false;

// Function to validate a phone number using regex
function validatePhone($phone)
{
    if (preg_match('/^\+[0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{4}$/', $phone)) {
        return true;
    } else {
        return false;
    }
}

// True or false logic for checking the number has been set 
if ($testnumber === true) {
    $matchNumber = $_POST['number'];
} else {
    $matchNumber = '';
}

$matchNumber = '';

// code to give the value for if the checkbox has been ticked
if (empty($_POST['marketing'])) {
    $marketing = 0;
} else {
    $marketing = $_POST['marketing'];
}

// variables that must pass for the form to be submitted
$ok = true;
$isName = true;
$isEmail = true;
$isPhone = true;
$isSubject = true;
$isMessage = true;

// check if the name field has been filled
if (!isset($name) || empty($name)) {
    $ok = false;
    $isName = false;
}

// Check if the email field has been filled and is valid
if (!isset($email) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $ok = false;
    $isEmail = false;
}

// Check if the number field has been filled and is valid 
if (!isset($number) || empty($number) || validatePhone($number)) {
    $ok = false;
    $isPhone = false;
}

// check if the subject field has been filled 
if (!isset($subject) || empty($subject)) {
    $ok = false;
    $isSubject = false;
}

// Check the message has been filled
if (!isset($message) || empty($message)) {
    $ok = false;
    $isMessage = false;
}

// Check that all previous requirments are filled if true then insert the data to the database
if ($ok) {
    //Insert Query
    $sql = "INSERT INTO contactmessages(name, email, phone, subject, message, marketing)   
                    values(?, ?, ?, ?, ?, ?)";

    $values = [$name, $email, $number, $subject, $message, $marketing];
    $insertStm = $pdo->prepare($sql);
    $insertStm->execute($values);
}

// Ajax return data
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
