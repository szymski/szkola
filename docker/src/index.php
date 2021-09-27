<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        if(isset($_POST["liczba1"])) {
            $liczba1 = $_POST["liczba1"];
            $liczba2 = $_POST["liczba2"];
            $wynik = $liczba1 + $liczba2;
            echo "Wynik: " . $wynik;
        }
    ?>

    <form method="post">
        <input type="text" name="liczba1">
        <input type="text" name="liczba2">
        <input type="submit">
    </form>
</body>
</html>
