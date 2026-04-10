<?php
// indexing array
//         0         1       2        3        4
$arr = ["Purple", "Pink", "Green", "Orange", "Gray"];
$sArr= ["Pakistan", "UAE", "Yamen"];

$newArr = array_merge($arr, $sArr);
print_r($newArr);
echo "<br>" . $newArr[3];
// echo count($arr) ."<br>";
// echo $arr[2]. "<br>";

// associative array
$arr2 = [
    ["id" => 1032, "name" => "Zahra"],
    ["id" => 3892, "name" => "Martha"],
    ["id" => 6549, "name" => "John"],
];
// echo count($arr2);
// echo $arr2[1]['id'] . "-" .$arr2[1]['name'];

?>