<?php

    include "../config/db.php";

    $id = $_GET['id'];
    
    if ($id < 0) return json_encode([
        "status" => false,
        "message"=> "Department id is not valid"
    ]);

    $query = "delete from departments where id=$id";
    $response = mysqli_query($conn, $query);

    if ($response){
        header("Location: ../departments.php");
    } else {
        return json_encode([
            "status" => false,
            "message"=> "Failed to delete data"
        ]);
    }
?>