<?php
    for($i = 1; $i <= 10; $i++) {
        echo "<button>Guzik $i</button>\n";
    }
?>

<br>
<h3>Test</h3>

Wersja PHP: <?=phpversion()?>
<br>
<br>

<?php
    for($i = 1; $i <= 10; $i++) {
        ?>
            <img src="http://dummyimage.com/<?=100 + $i * 20?>x40/000/fff">
            <br>
        <?php
    }
?>
