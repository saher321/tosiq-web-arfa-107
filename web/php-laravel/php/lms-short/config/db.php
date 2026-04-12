<?php
    $conn = mysqli_connect("localhost", "root", "", "lms107");

    if ($conn){
        echo "database is connected";
    } else {
        echo "database is not connected";
    }
?>