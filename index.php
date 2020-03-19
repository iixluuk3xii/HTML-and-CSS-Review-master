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

    <?php
    include(__DIR__ . '/INC/sideMenu.php');
    ?>

    <!-- Live Chat -->

    <div id="chat" class="live-chat">
        <i class="fas fa-comment-dots"></i>
        <div class="notification">1</div>
    </div>

    <!-- /Live Chat -->

    <div id='overlay'></div>

    <!------------ Header ------------>
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

        <div id="bar" class="bar">
            <ul>
                <li>
                    <h4>Latest</h4>
                    <span class="block"></span>
                </li>
            </ul>
        </div>

        <div id="news-cards" class="news-cards">

            <div class="container">

                <div id="card1" class="card">
                    <div class="card-img-top">
                        <a class="category">
                            <div class="popup">
                                <div class="tooltip">
                                    <p>View all: Web Deisign / Careers</p>
                                    <div class="arrow"></div>
                                </div>
                            </div>
                            Careers
                        </a>
                        <div class="img-container">
                            <a>
                                <div class="fog"></div><img src="../IMGs/full-stack-web-l5m7.jpg" alt="Card image cap">
                            </a>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3 class="title"><a>Full stack developer</a></h3>
                        <p class="card-text">Salary: £25,000 - £36,000 per annum + Bonus (Dependent on Experience)
                            Hours: 40
                            hours per week, M...</p>
                        <a href="#" id="btn" class="btn btn1">Read more</a>
                        <div class="Author">
                            <img class="icon" src="../IMGs/josh-ralph-icon.jpg" alt="Author icon">
                            <div class="details">
                                <strong>Posted by Josh Ralph</strong><br>
                                22nd November 2019
                            </div>
                        </div>
                    </div>
                </div>

                <div id="card2" class="card">
                    <div class="card-img-top">
                        <a class="category">
                            <div class="popup">
                                <div class="tooltip">
                                    <p class="middle">View all: IT Support / Careers</p>
                                    <div class="arrow"></div>
                                </div>
                            </div>
                            Careers
                        </a>
                        <div class="img-container">
                            <a>
                                <div class="fog"></div><img src="../IMGs/2nd-line-support.jpg" alt="Card image cap">
                            </a>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3 class="title"><a>2nd Line support technician</a></h3>
                        <p class="card-text">SALARY: £22,000 - £28,000 + Bonus & Pension Netmatters is a rapidly
                            growing
                            IT and website de...</p>
                        <a href="#" id="btn" class="btn btn2">Read more</a>
                        <div class="Author">
                            <img class="icon" src="../IMGs/rob-george-icon.jpg" alt="Author icon">
                            <div class="details">
                                <strong>Posted by Rob George</strong><br>
                                21st November 2019
                            </div>
                        </div>
                    </div>
                </div>

                <div id="card3" class="card">
                    <div class="card-img-top">
                        <a class="category">
                            <div class="popup">
                                <div class="tooltip">
                                    <p>View all: Telecoms Services / Insights</p>
                                    <div class="arrow"></div>
                                </div>
                            </div>
                            insights
                        </a>

                        <div class="img-container">
                            <a>
                                <div class="fog"></div><img src="../IMGs/imagine-connecting-to.jpg" alt="Card image cap">
                            </a>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3 class="title"><a>Imagine: Connecting to Your Business (and Cus...</a></h3>
                        <p class="card-text">Technology accelerates at a dizzying pace. And technology feels like
                            it's
                            accelerating because i...</p>
                        <a href="#" id="btn" class="btn">Read more</a>
                        <div class="Author">
                            <img class="icon" src="../IMGs/evan-thomas-icon.jpg" alt="Author icon">
                            <div class="details">
                                <strong>Posted by Evan Thomas</strong><br>
                                18th November 2019
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>



        <!-- /News updates -->

        <?php
        include(__DIR__ . '/INC/footer.php');
        ?>

    </div>

</body>

<?php
include(__DIR__ . '/INC/cookie.php');
?>

<!------------ /Body ------------>

<!-- /Accreditations logos -->

<!-- Type kit -->

<script src="https://kit.fontawesome.com/4f920b82bf.js" crossorigin="anonymous"></script>
<script src="../JS/ES5/scrollHeader.js" crossorigin="anonymous"></script>
<script src="../JS/ES5/bannerSlider.js" crossorigin="anonymous"></script>
<script src="../JS/ES5/cookie.js" crossorigin="anonymous"></script>
<script src="../JS/ES5/mobileMenu.js" crossorigin="anonymous"></script>

<!-- /Type kit -->

</html>