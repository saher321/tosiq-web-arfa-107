<?php
if (isset($_GET['sb_btn'])){
    $fa = $_GET['fa'];

    if ($fa == "" || !$fa){
        $error = "Form field is required";
    } else {
        $c = ($fa - 32) * 5/9;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        small{
            color: red;
        }
    </style>
</head>
<body>
    <form action="" method="GET">
        <table border="1" cellspacing="0" cellpadding="20">
            <tr>
                <td colspan="2">
                    <h3>F to C conversion</h3>
                    <small>
                        <?php
                            if (isset($error)){
                                echo $error;
                            }
                        ?>
                    </small>
                </td>
            </tr>
            <tr>
                <td>Fah Value:</td>
                <td>
                    <input name="fa" value="<?php if (isset($_GET['fa'])) echo $_GET['fa'] ?>" type="text" placeholder="Enter value">
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <button name="sb_btn" type="submit">Submit</button>
                </td>
            </tr>
            <tr>
                <td>Result: </td>
                <td>
                    <div>
                        <?php
                            if (isset($c)) {
                                echo $c . " C&deg;";
                            }
                        ?>
                    </div>
                </td>
            </tr>
        </table>
    </form>
</body>
</html>