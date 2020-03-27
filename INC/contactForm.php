<div id="form-bar">
    <ul class="bar-title">
        <li>
            <a href="index.php">Home</a>
        </li>
        <li class="slash">/</li>
        <li>
            How Can We Help You?
        </li>
    </ul>
</div>
<div class="title">
    <h1>How Can We Help You?</h1>
</div>
<div class="form-background">
    <div id="form">
        <div id="fields">
            <div id="flash">
                <div id="missing-fields" class="flash bad">
                    <strong>Please Fill in all of the Requiered Fields.</strong>
                </div>
                <div id="invalid-email" class="flash bad">
                    <strong>Please Enter a Valid Email Address.</strong>
                </div>
                <div id="invalid-phone" class="flash bad">
                    <strong>Please Enter a Valid Phone Number.</strong>
                </div>
                <div id="invalid-server" class="flash bad">
                    <strong>Sorry, Something Went Wrong With the Server Request.</strong><br>
                <strong>Please Refresh the Page and Try Again.</strong>
            </div>
                <div id='success' class='flash good'>
                    <strong>Thank You for Contacting Us, Your Message Has Been Sent Successfuly.</strong>
                </div>
            </div>
            <form method="POST" accept-charset="UTF-8" id="contact-form" action="contactAction.php" novalidate="novalidate">
                <div class="row">
                    <span class="field">
                        <label for="name">Your Name </label>
                        <input name="name" autocomplete="on" type="text" id="name" value="<?php if (isset($_POST["name"])) echo $_POST["name"]; ?>">
                    </span>
                    <span class="field">
                        <label for="email">Your Email </label>
                        <input name="email" autocomplete="on" type="text" id="email" value="<?php if (isset($_POST["email"])) echo $_POST["email"]; ?>">
                    </span>
                </div>
                <div class="row">
                    <span class="field">
                        <label for="number">Your Telephone Number </label>
                        <input name="number" autocomplete="on" type="tel" id="number" value="<?php if (isset($_POST["number"])) echo $_POST["number"]; ?>">
                    </span>
                    <span class="field">
                        <label for="subject">Subject </label>
                        <input name="subject" type="text" id="subject" value="<?php if (isset($_POST["subject"])) echo $_POST["subject"]; ?>">
                    </span>
                </div>
                <div class="row">
                    <span class="m-field">
                        <label for="message">Message </label>
                        <textarea name="message" id="message" class="message" cols="50" rows="10"><?php if (isset($_POST["message"])) echo $_POST["message"]; ?></textarea>
                    </span>
                </div>
                <div class="row PP">
                    <span class="pretty-checkbox">
                    <i class="fas fa-check"></i>
                    <input name="marketing" type="checkbox" class="check" value="1">
                    </span>
                    <p>Please tick this box if you wish to receive marketing information from us.
                        Please see our
                        <a href="">Privacy Policy</a>
                        for more information on how we use your data</p>
                </div>
                <button type="submit" id="send" class="btn send">SEND ENQUIRY</button>
            </form>
        </div>
        <div id="details">
            <div class="row-sm">
                <strong>Call us on:</strong>
                <a href="#" class="big phone-num">01603 70 40 20</a>
            </div>
            <div class="row-sm">
                <strong>Email us on:</strong>
                <a href="#" class="big email">sales@netmatters.com</a>
            </div>
            <div class="row-sm">
                <strong>Call us at our Gorleston branch on:</strong>
                <a href="#" class="big phone-num">01493 603204</a>
            </div>
            <div class="txt">
                <strong>Business hours:</strong>
            </div>
            <div class="txt">
                <strong>Monday - Friday 07:00 - 18:00</strong>
            </div>
            <div class="txt">
                <h4>
                    <a href="">
                        <div>
                            <p>
                                Out of Hours IT Support <i class="fas fa-chevron-down"></i>
                            </p>
                        </div>
                    </a>
                </h4>
            </div>
        </div>
    </div>
</div>
<div id="info">

    <div class="container">

        <div id="cards" class="cards location">

            <div class="map">
                <div class="map--card">

                    <a>

                        <div class="icon--black">
                            <i class="fas fa-home"></i>
                        </div>

                        <h2>Netmatters Office: Wymondham<span class="dash"></span></h2>

                        <p>
                            Netmatters <br>
                            11 Penfold Drive <br>
                            Wymondham <br>
                            Norfolk <br>
                            NR18 0WZ
                        </p>

                    </a>

                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.650833026772!2d1.1340782156411313!3d52.57592537982482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9ddac8dba0b4b%3A0x9c77ffbfe7911dab!2sNetmatters!5e0!3m2!1sen!2suk!4v1584707013706!5m2!1sen!2suk" width="555" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>

            <div class="map">
                <div class="map--card">

                    <a>

                        <div class="icon--black">
                            <i class="fas fa-road"></i>
                        </div>

                        <h2>Netmatters Office: Gorleston, Great Yarmouth<span class="dash"></span></h2>

                        <p>
                            Netmatters - Great Yarmouth <br>
                            Suite F23 Beacon Innovation Centre, Beacon Park <br>
                            Gorleston, Great Yarmouth <br>
                            Norfolk <br>
                            NR31 7RA
                        </p>

                    </a>

                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2425.7234908590995!2d1.7104906156403177!3d52.55652637982112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47da0593b311cec3%3A0x1cb3c1d4c0b340f6!2sNetmatters%20Gorleston!5e0!3m2!1sen!2suk!4v1584707519744!5m2!1sen!2suk" width="555" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>

    </div>

</div>