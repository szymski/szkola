<h3>Metoda GET</h3>
<form method="GET">
    <input name="text">
    <input type="submit">
</form>

<h3>Metoda POST</h3>
<form method="POST">
    <input name="text">
    <input type="submit">
</form>

<?php
    if(isset($_GET["text"])) {
        $value = $_GET["text"];
        echo "Wartość GET: " . $value;
    }
?>

<br>

<?php
    if(isset($_POST["text"])) {
        $value = $_POST["text"];
        echo "Wartość POST: " . $value;
    }
?>
