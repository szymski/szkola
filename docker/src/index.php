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
        $zalogowany = false;

        if($zalogowany) {
            echo "Jesteś zalogowany!";
        }
        else {
            echo "Nie jesteś zalogowany";
        }
    ?>

    <form method="post">
        <input type="text" placeholder="Login" name="login">
        <input type="password" placeholder="Hasło" name="password">
        <input type="submit" value="Zaloguj">
    </form>
</body>
</html>
