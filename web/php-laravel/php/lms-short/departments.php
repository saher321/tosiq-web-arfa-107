<?php
    include "./config/db.php";

    $query = "select * from departments";

    $departments = mysqli_query($conn, $query);

    echo "<br>";
    // print_r($departments);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3>Departments</h3>

    <table border="1" cellspacing="0" cellpadding="20">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php
            foreach($departments as $dept){
            ?>
            <tr>
                <td>
                    <?php echo $dept['id']?>
                </td>
                <td>
                    <?php echo $dept['name']?>
                </td>
                <td>
                    <?php echo $dept['status']?>
                </td>
                <td>
                    Edit / Delete
                </td>
            </tr>
            <?php }?>
        </tbody>
    </table>

</body>
</html>