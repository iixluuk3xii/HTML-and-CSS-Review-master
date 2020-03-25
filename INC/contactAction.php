<?php
include('newsCardsDBRequest.php');

if (isset($_POST['name'])) { // Fetching variables of the form
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['number'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $token = $_POST['token'];
    if (empty($_POST['marketing'])) {
        $marketing = 0;
    } else {
        $marketing = $_POST['marketing'];
    }

    if ($name != "" || $email != "" || $phone != "" || $subject != "" || $message != "") {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            if (!empty($phone)) {
                $pattern = '/^(?:\(\+?44\)\s?|\+?44 ?)?(?:0|\(0\))?\s?(?:(?:1\d{3}|7[1-9]\d{2}|20\s?[78])\s?\d\s?\d{2}[ -]?\d{3}|2\d{2}\s?\d{3}[ -]?\d{4})$/';
                if (preg_match($pattern, $phone)) {

                    //Insert Query
                    $sql = "INSERT INTO contactmessages(name, email, phone, subject, message, marketing)   
                    values(?, ?, ?, ?, ?, ?)";

                    try {
                        $insertStm = $pdo->prepare($sql);
                    } catch (Exception $e) {
                        $e->getMessage();
                    }
                    
                    try {
                        $insertStm->execute([$name, $email, $phone, $subject, $message, $marketing]);
                    } catch (Exception $e) {
                        $e->getMessage();
                    }
                    
                    unset($_POST);
                }
            }
        }
    }
}
