<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3>Wariant 1</h3>

    <?php
        if(isset($_POST["message1"]) && isset($_POST["message2"])) {
            $liczba1 = $_POST["message1"];
            $liczba2 = $_POST["message2"];
            $wynik = $liczba1 + $liczba2;
            echo "Wynik: " . $wynik;
        }
    ?>

    <form method="post">
        <input type="text" name="message1">
        <input type="text" name="message2">
        <input type="submit" value="Wyślij">
    </form>

    <h3>Wariant 2</h3>

    <?php
        if(isset($_POST["message"])) {
            echo "Wynik: " . eval("return " . $_POST["message"] . ";");
        }
    ?>

    <form method="post">
        <input type="text" name="message">
        <input type="submit" value="Wyślij">
    </form>
</body>
</html>
