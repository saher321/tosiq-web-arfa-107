<?php
session_start();
if(isset($_POST['sbmt_btn'])){
    $n = $_POST['name'];
    $_SESSION['name'] = $n;
    echo "Data has been submitted.";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
        <input type="text" name="name">
        <button name="sbmt_btn">Save to session</button>
    </form>
    <br>
    <div>
        You saved this name: 
        <?php
        echo $_SESSION['name']??"no name were assigned";
        ?>
    </div>
</body>
</html>