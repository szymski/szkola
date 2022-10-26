<?php
    session_start();

    function getSomeNumber() {
        return 42;
    }

    /**
     * Returns true if user is logged in, false if not.
     */
    function isLoggedIn() {
        return isset($_SESSION["logged_in"]);
    }

    /**
     * Returns the username of the logged in user.
     */
    function getUsername() {
        return $_SESSION["login"];
    }

    /**
     * Tries to login using username and password.
     * Returns true if credentials valid, false if wrong.
     */
    function login($login, $password) {
        if($login == "admin" && $password == "123") {
            $_SESSION["logged_in"] = true;
            $_SESSION["login"] = $login;
            return true;
        } else {
            return false;
        }
    }

    /**
     * Logs the user out.
     * Destroys session.
     */
    function logout() {
        $_SESSION["logged_in"] = null;
        session_destroy();
    }

?>