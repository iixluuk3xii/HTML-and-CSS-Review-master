<?php
$title = "Netmatters | Full Service Digital Agency | Norwich, Norfolk | Netmatters";
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

        <!-- Gallery -->

        <?php
        include(__DIR__ . '/INC/carousel.php');
        ?>

        <!-- /Gallery -->

        <!-- information cards -->

        <?php
        include(__DIR__ . '/INC/infoSection.php');
        ?>

        <!-- /information cards -->

        <!-- Culture information -->

        <?php
        include(__DIR__ . '/INC/CultureSection.php');
        ?>

        <!-- /Culture information -->

        <!-- News updates -->

        <?php
        include(__DIR__ . '/INC/newsCards.php');
        ?>

        <!-- /News updates -->

        <?php
        include(__DIR__ . '/INC/accreditations.php');
        ?>

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
    include(__DIR__ . '/INC/scriptsIndex.php');
    ?>

    <!-- /Scripts -->

</body>

<!------------ /Body ------------>

</html>