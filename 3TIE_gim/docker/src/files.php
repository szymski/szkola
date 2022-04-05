<?php
    $dir = "files";
    if(isset($_GET["dir"])) {
        $dir = $_GET["dir"];
    }
    $files = scandir($dir);
?>

<h2>Lista plików w folderze '<?=$dir?>': </h2>
<ul>
    <?php
        foreach($files as $file) {
            $full_path = $dir . "/" . $file;
            if(is_dir($full_path)) {
            ?>
                <li><b><a href='?dir=<?=$full_path?>'><?=$file?>/</a></b></li>
            <?php
            }
            else {
            ?>
                <li><a href='/<?=$full_path?>'><?=$file?></a></li>
            <?php
            }
        }
    ?>
</ul>
