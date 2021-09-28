<?php
    include "session.php";
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
        // Obsługa logowania
        if(isset($_POST["login"]))
        {
            $login = $_POST["login"];
            $password = $_POST["password"];

            do_login($login, $password);
        }

        // Obsługa wylogowania
        if(isset($_POST["logout"])) {
            logout();
        }
    ?>

    <?php if(!is_logged_in()) { ?>
        
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
