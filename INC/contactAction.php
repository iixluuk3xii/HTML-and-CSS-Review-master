<?php

include('newsCardsDBRequest.php');

if (
    isset($_POST['name'])
) { // Fetching variables of the form
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['number'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    if(empty($_POST['marketing']))
    {
        $marketing = 0;
    } else 
    {
        $marketing = $_POST['marketing'];
    }
    if ($name != '' || $email != '' || $phone != "" || $subject != "" || $message != "") {
        //Insert Query
        $sql = "INSERT INTO contactmessages(name, email, phone, subject, message, marketing)   
        values(?, ?, ?, ?, ?, ?)";

        $insertStm = $pdo->prepare($sql);
        $insertStm->execute([$name, $email, $phone, $subject, $message, $marketing]);
        
        echo "<p>Your message has been sent succesfully.</p>";
    } else {
        echo "<p>Please Fill in the Blank Fields.</p>";
    }
}
