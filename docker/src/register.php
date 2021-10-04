<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rejestracja</title>
    <style>
        body {
            display: flex;
        }

        .register-form {
            display: inline-block;
            padding: 0.5rem;
            background: #eee;
            border: 1px solid #999;
            border-radius: 4px;
            text-align: center;
            margin: auto;
        }

        input {
            width: 200px;
            display: block;
            margin: 6px auto;
        }

        input[type=submit] {
            margin-top: 1rem;
            width: 100%;
        }

        h5 {
            margin-top: 0.5rem;
            margin-bottom: 1rem;
        }
    </style>
</head>

<body>
    <form method="post" class="register-form">
        <h5>Rejestracja</h5>
        <input type="text" placeholder="Login" name="login" id="login">
        <input type="passwordX" placeholder="Hasło" name="password" id="password">
        <input type="passwordX" placeholder="Powtórz hasło" name="password2" id="password2">
        <input type="submit" value="Zarejestruj" id="button">
    </form>

    <script type="text/javascript">
        const login = document.getElementById("login");
        const password = document.getElementById("password");
        const password2 = document.getElementById("password2");

        const button = document.getElementById("button");

        function validate() {
            const txt1 = password.value;
            const txt2 = password2.value;
            const passwordsEqual = txt1 == txt2;

            const loginValue = login.value;
            const isLoginEmpty = loginValue == "";

            button.disabled = !passwordsEqual || isLoginEmpty;
        }

        login.onkeyup = validate;
        password.onkeyup = validate;
        password2.onkeyup = validate;
    </script>
</body>

</html>