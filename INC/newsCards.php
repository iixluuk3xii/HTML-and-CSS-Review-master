<?php
include('newsCardsDBRequest.php');
?>

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

        <?php 
        
        foreach ($cards as $card) {
            echo "<div id='card" . $card['cardID'] . "' class='card'>";
            echo "<div class='card-img-top'>";
            echo "<a class='category'>";
            echo "<div class='popup'>";
            echo "<div class='tooltip'>";
            echo "<p>View all: " . $card['toolTip'] . "</p>";
            echo "<div class='arrow'></div>";
            echo "</div>";
            echo "</div>";
            echo $card['category'];
            echo "</a>";
        
            echo "<div class='img-container'>";
            echo "<a>";
            echo "<div class='fog'></div><img src='" . $card['IMG'] . "' alt='Card image cap'>";
            echo "</a>";
            echo "</div>";
            echo "</div>";
            echo "<div class='card-body'>";
            echo "<h3 class='title'><a style='color:" . $card['color'] . "'>" . $card['title'] . "</a></h3>";
            echo "<p class='card-text'>" . $card['desc'] . "</p>";
            echo "<a href='#' id='btn' class='btn' style='background-color: " . $card['color'] . "'>Read more</a>";
            echo "<div class='Author'>";
            echo "<img class='icon' src='" . $card['authorIcon']  . "' alt='Author icon'>";
            echo "<div class='details'>";
            echo "<strong>Posted by " . $card['authorName'] . "</strong><br>";
            echo date('jS F Y', strtotime($card['datePosted']));
            echo "</div>";
            echo "</div>";
            echo "</div>";
            echo "</div>";
        }

        ?>

    </div>

</div>

