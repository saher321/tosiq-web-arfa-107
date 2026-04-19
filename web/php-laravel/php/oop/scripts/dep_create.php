<?php

    include "../config/db.php";

    $name = $_POST['dep_name'];
    $status = $_POST['status'];

    $query = "insert into departments(name, status) values('$name','$status')";
    $response = mysqli_query($conn, $query);

    if ($response){
        header("Location: ../departments.php");
    } else {
        return json_encode([
            "status" => false,
            "message"=> "Failed to insert data"
        ]);
    }
?>