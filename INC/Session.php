<?php

ini_set( 'session.cookie_httponly', 1 );
ini_set( 'session.use_only_cookies', 1 );

session_start();

$CSRF = random_bytes(32);

$_SESSION['CSRF'] = $CSRF;
?>