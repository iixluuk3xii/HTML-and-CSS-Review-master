<?php

ini_set( 'session.cookie_httponly', 1 );
ini_set( 'session.use_only_cookies', 1 );

session_start();
if (empty($_SESSION['CSRF'])) {
    $_SESSION['CSRF'] = random_bytes(32);
}
$CSRF = $_SESSION['CSRF'];
?>