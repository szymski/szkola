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

    <?php
        if(!is_logged_in())
            include "loginform.php";
        else
            include "main.php";
    ?>
</body>
</html>
