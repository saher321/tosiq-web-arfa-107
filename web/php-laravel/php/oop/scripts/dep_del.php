<?php

    include "../classes/db.php";
    include "../classes/department.php";

    $id = $_GET['id'];
    
    if ($id <= 0) return json_encode([
        "status" => false,
        "message"=> "Department id is not valid"
    ]);

    $response = $dept->delete($id);

    if ($response){
        header("Location: ../departments.php");
    } else {
        return json_encode([
            "status" => false,
            "message"=> "Failed to delete data"
        ]);
    }
?>