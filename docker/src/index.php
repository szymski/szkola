<?php
    session_start();
?>

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
        $logged_in = isset($_SESSION["logged_in"]) && $_SESSION["logged_in"] == true;


        // Obsługa logowania
        if(isset($_POST["login"]))
        {
            $login = $_POST["login"];
            $password = $_POST["password"];

            if($login == "admin" && $password == "1234") {
                $_SESSION["logged_in"] = true;
                $logged_in = true;
                echo "Dane prawidłowe!";
            }
            else {
                echo "Dane nieprawidłowe!";
            }
        }

        // Obsługa wylogowania
        if(isset($_POST["logout"])) {
            session_destroy();
            $logged_in = false;
            echo "Wylogowano!";
        }
    ?>

    <?php if(!$logged_in) { ?>
        
    <form action="" method="post">
        <input type="text" placeholder="Login" name="login">
        <input type="password" placeholder="Hasło" name="password">
        <input type="submit" value="Zaloguj">
    </form>

    <?php } else { ?>
        <b>Jesteś zalogowany!</b>
        <form method="post">
            <input type="hidden" name="logout">
            <input type="submit" value="Wyloguj">
        </form>
    <?php } ?>
</body>
</html>
