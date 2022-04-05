<?php
    if(isset($_POST["login"])) {
        $login = $_POST["login"];
        $password = $_POST["password"];
        
        if($login == "admin" && $password == "pwd") {
            header("Location: secret.php");
        } else {
            echo "Błędne dane";
        }
    }
?>

<form method="post">
    <input name="login" placeholder="Login"><br>
    <input type="password" name="password" placeholder="Password"><br>
    <input type="submit" value="Sign in"><br>
</form>
