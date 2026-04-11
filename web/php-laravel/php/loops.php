<?php
$colors = ['Purple', 'Black', 'White', 'Green'];

// for($i = 0; $i < count($colors); $i++){
//     echo $colors[$i] . "<br>";
// }

$numbers = [2,3,4,5];
$sum = 1;
// print_r($arr);
// loop
// initialization
// condition
// inc/decr
// for($i = 0; $i < count($numbers); $i++){
//     $sum = $sum * $numbers[$i];
// }
// echo "Array sum is: ".$sum;
// echo "<br>---------------------<br>";
// for($j = 1; $j <= 10; $j++){
//     echo $j*2 . "<br>";
// }
// i = 1 => 1
// i = 2 => 2
// ----------------------------

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Loops</h2>
    <select>
        <?php
        // for($i = 0; $i < count($colors); $i++){
        //     echo "<option>". $colors[$i] . "</option>";
        // }
        foreach($colors as $clr){
            echo "<option>". $clr . "</option>";
        }
        ?>
    </select>
</body>
</html>