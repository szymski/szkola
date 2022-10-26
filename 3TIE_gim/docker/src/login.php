<?php
require "include/session.php";

$error = null;

if (isset($_POST["login"])) {
    $isValid = login($_POST["login"], $_POST["password"]);
    if ($isValid) {
    } else {
        $error = "Logowanie nie powiodło się!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel logowania PHP</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</head>

<body>
    <nav class="navbar navbar-dark bg-dark mb-3">
        <div class="container-fluid">
            <a class="navbar-brand">helloBootstrap</a>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </nav>

    <div class="text-center">
        <?php if ($error != null) { ?>
            <div class="container alert alert-danger" role="alert">
                <?= $error ?>
            </div>
        <?php } ?>

        <?php
        if (isLoggedIn()) {
        ?>
            <h3>Jesteś zalogowany jako <b><?= getUsername() ?></b></h3>
            <form method="post">
                <input class="btn btn-danger" type="submit" name="logout" value="Wyloguj">
            </form>
        <?php
        } else {
        ?>
            <div class="card mt-1 bg-success w-50 m-auto">
                <div class="card-header text-light bg-primary">
                    Panel logowania
                </div>
                <form method="POST">
                    <div class="card-body text-light">
                        <div class="mb-1">
                            <label for="exampleFormControlInput1" class="form-label">Login</label>
                            <input name="login" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Login">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Password</label>
                            <input name="password" type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password">
                        </div>
                        <div class="d-grid">
                            <button class="btn btn-warning">Zaloguj</button>
                        </div>
                    </div>
                </form>
            </div>
        <?php
        }
        ?>

        <code>getSomeNumber z session.php: <?= getSomeNumber() ?></code>
    </div>

    <div class="row">
        <button class="btn btn-primary col m-2">Col</button>
        <button class="btn btn-primary col m-2">Col</button>
        <button class="btn btn-primary col m-2">Col</button>
    </div>
</body>

</html>