<?php
    session_start();

    function is_logged_in() {
        return isset($_SESSION["logged_in"]) && $_SESSION["logged_in"] == true;
    }

    function do_login($username, $password) {
        if($username == "admin" && $password == "1234") {
            $_SESSION["logged_in"] = true;
            echo "Dane prawidłowe!";
        }
        else {
            echo "Dane nieprawidłowe!";
        }
    }

    function logout() {
        session_destroy();
        $_SESSION["logged_in"] = false;
        echo "Wylogowano!";
    }

    function register($login, $password) {
        $users = array();
        $users[$login] = $password;
        $json = json_encode($users);
        file_put_contents("users.json", $json);
    }

    // function read_users_file() {

    // }
?>