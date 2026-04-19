<?php
    include "./classes/product.php";

    $list = $product->get_products();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Product listing</h1>

    <ul>
        <?php
        foreach($list as $item){
        ?>

        <li> 
            <?php echo $item['id']?> | 
            <?php echo $item['name']?> | 
            <?php echo $product->slug($item['name'])?>
        </li>
        
        <?php
        }
        ?>
    </ul>
</body>
</html>