<?php

$dsn = "mysql:host=localhost;dbname=netmattersnewscards";
$user = "root";
$passwd = "";

$pdo = new PDO($dsn, $user, $passwd);

$stm = $pdo->query("SELECT * FROM newscards");

$cards = $stm->fetchAll();

?>

