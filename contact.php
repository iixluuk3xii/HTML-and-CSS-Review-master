<?php
$title = "Contact Us | Netmatters";
$style = "../CSS/Main.css";
?>
<!DOCTYPE html>

<html>

<!------------ Head ------------>

<?php
include(__DIR__ . '/INC/htmlHead.php');
?>

<!------------ /Head ------------>

<!------------ Body ------------>

<body>

    <!-- MobileMenu -->

    <?php
    include(__DIR__ . '/INC/sideMenu.php');
    ?>

    <!-- /MobileMenu -->

    <!-- Live Chat -->

    <?php
    include(__DIR__ . '/INC/liveChat.php');
    ?>

    <!-- /Live Chat -->

    <div id='overlay'></div>

    <!-- ViewPort -->

    <div id="viewport">

        <!-- StickyHeader -->

        <?php
        include(__DIR__ . '/INC/navBar.php');
        ?>

        <!-- /StickeyHeader -->

        <!-- Form -->

        <?php
include(__DIR__ . '/INC/contactForm.php');
?>

        <!-- /Form -->

        <!-- Footer -->

        <?php
        include(__DIR__ . '/INC/footer.php');
        ?>

        <!-- /Footer -->

    </div>

    <!-- /ViewPort -->

    <!-- Cookie -->

    <?php
    include(__DIR__ . '/INC/cookie.php');
    ?>

    <!-- /Cookie -->

    <!-- Scripts -->

    <?php
    include(__DIR__ . '/INC/scriptsContact.php');
    ?>

    <!-- /Scripts -->

</body>

<!------------ /Body ------------>

</html>