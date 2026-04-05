<!-- 
Data types
SCALER/BASIC
$a = 10         => integer
$a = "Tosiq"    => string
$a = "T"        => string
$a = 10.3       => float

COMPOUND
indexes   0        1         2
$a = [ "Green", "Purple", "Black" ] => array
echo $a[2]
$a = [
    "name" => "Usman",
    "age" => 34
]
echo $a["name"] => Usman

json_encode($a) => { "name": "Usman", "age": 34 }

SPECIAL TYPE
$a = null
resource =>  include "./utils/functions.php"
-->