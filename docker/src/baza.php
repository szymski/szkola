<?php
    $db = mysqli_connect("db", "root", "root", "db");
    if(!$db) {
        die("Coś nie zadziałało");
    }

    $result = mysqli_query($db, "SELECT users.name, games.name FROM games JOIN users ON users.id = games.userId");

    while($row = mysqli_fetch_array($result)) {
        echo $row[0];
        echo " - ";
        echo $row[1];
        echo "<br>";
    }
?>