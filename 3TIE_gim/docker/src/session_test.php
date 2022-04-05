<?php
session_start();
?>

<?php
// Sprawdzanie danych logowania i zapisywanie do sesji
if (isset($_POST["login"])) {
    if ($_POST["login"] == "admin" && $_POST["password"] == "123") {
        $_SESSION["logged_in"] = true;
        $_SESSION["login"] = $_POST["login"];
    } else {
        echo "Zły login lub hasło!";
    }
}

// Obsługa wylogowywania
if(isset($_POST["logout"])) {
    echo "Wylogowano!";
    $_SESSION["logged_in"] = null;
    session_destroy();
}
?>

<code>
    <pre>
Sesja: 
<?php print_r($_SESSION); ?>
    </pre>
</code>

<!-- Login form -->
<?php
if (isset($_SESSION["logged_in"])) {
?>
    Jesteś zalogowany jako <b><?= $_SESSION["login"] ?></b>
    <form method="post">
        <input type="submit" name="logout" value="Wyloguj">
    </form>
<?php
} else {
?>
    <form method="post">
        <input type="text" name="login" placeholder="Login">
        <input type="password" name="password" placeholder="Password">
        <input type="submit">
    </form>
<?php
}
?>

<style>
    /* Style login form, margins and background */
    form {
        margin: 10px;
        background: #eee;
        padding: 10px;
    }

    /* Style input fields */
    input {
        display: block;
        margin: 5px;
        padding: 5px;
    }

    /* Style submit button */
    input[type="submit"] {
        margin: 5px;
        padding: 5px;
        background: #ccc;
    }

    /* Style submit button when clicked */
    input[type="submit"]:hover {
        background: #aaa;
    }

    /* Style submit button when clicked */
    input[type="submit"]:active {
        background: #999;
    }
</style>