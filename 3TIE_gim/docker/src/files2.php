<?php
    $dir = "files";
    $files = scandir($dir);
?>

<h2>Lista plików w folderze '<?=$dir?>': </h2>
<ul>
    <?php
        foreach($files as $file) {
            $full_path = $dir . "/" . $file;
            $info = pathinfo($full_path);
            $extension = $info["extension"] ?? "";

            if(is_dir($full_path)) {
                echo "<li><a href='/$full_path'>$file/</a></li>";
            }
            else {
                echo "<li><a href='/$full_path'>";

                if($extension == "txt") {
                    echo "<img width='32' src='https://cdn-icons.flaticon.com/png/512/4722/premium/4722875.png?token=exp=1648820554~hmac=cd054eaf06b01b6bc97ea263b441cded'>";
                }
                else if($extension == "json") {
                    echo "<img width='32' src='https://cdn-icons-png.flaticon.com/512/617/617517.png'>";
                }
                echo "$file";

                echo "</a></li>";
            }
        }
    ?>
</ul>

<style>
    img {
        vertical-align: middle;
    }

    li {
        margin: 5px;
    }
</style>