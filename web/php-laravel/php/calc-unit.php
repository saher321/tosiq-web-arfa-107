<?php
$localUnit = 20;
$standardUnit = 36;
$commercialUnit = 66;
$premiumUnit = 130;

$subsity = 200;
$cost = 0;

if (isset($_GET['submit_btn'])){

    $cUnit = (int) $_GET['cUnit'];

    if (!$cUnit) {
        echo "<script>alert('Please fill the field')</script>";
    }

    // range 50 - 199
    if ($cUnit >= 50 && $cUnit <= 199){
        $cost = $cUnit * $localUnit;
        $cost = $cost - $subsity;

        // range 200 - 300
    } elseif ($cUnit >= 200 && $cUnit <= 300){
        $cost = $cUnit * $standardUnit;
    
        // range 301 - 400
    } elseif ($cUnit >= 301 && $cUnit <= 400){
        $cost = $cUnit * $commercialUnit;
    } else {
        $cost = $cUnit * $premiumUnit;
    }

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
    <form action="" method="GET">
        <table border="1" cellspacing="0" cellpadding="20">
            <tr>
                <td colspan="2">
                    <h3 align="center">Calcultion unit for bill</h3>
                </td>
            </tr>
            <tr>
                <td>Unit</td>
                <td>
                    <input type="number" name="cUnit" 
                    value="
                    <?php 
                    if (isset($_GET['cUnit'])){
                        echo $_GET['cUnit'];
                    }
                    ?>
                    " 
                    placeholder="Enter units" />
                </td>
            </tr>
            <tr>
                <td></td>
                <td><button name="submit_btn" type="submit">Show Result</button></td>
            </tr>
            <tr>
                <td>
                    Due amount
                </td>
                <td>
                    <?php 
                    if(isset($cost)){
                        echo $cost;
                    }
                    ?>
                </td>
            </tr>
        </table>
    </form>
</body>
</html>