<?php
    session_start();

    function is_logged_in() {
        return isset($_SESSION["logged_in"]) && $_SESSION["logged_in"] == true;
    }

    function do_login($username, $password) {
        $users = read_users();

        // Uzytkownik nie istnieje
        // Haslo nieprawidlowe
        // Zalogowano pomyslnie

        if(isset($users[$username])) {
            if($users[$username] == $password) {
                $_SESSION["logged_in"] = true;
                echo "Zalogowano pomyślnie!";
            }
            else {
                echo "Błędne hasło!";
            }
        }
        else {
            echo "Nie ma takiego usera!";
        }
    }

    function logout() {
        session_destroy();
        $_SESSION["logged_in"] = false;
        echo "Wylogowano!";
    }

    function register($login, $password) {
        $users = read_users();

        // Dodajemy uzytkownika
        $users[$login] = $password;

        // Zapisujemy ponownie jako users.json
        $json = json_encode($users);
        file_put_contents("users.json", $json);
    }

    function read_users() {
        $users = array();

        if(file_exists("users.json")) {
            $file_content = file_get_contents("users.json");
            $users = json_decode($file_content, true);
        }

        return $users;
    }
?>