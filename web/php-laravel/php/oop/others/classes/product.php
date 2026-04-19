<?php
    class Product {

        function get_products() {
        
            $data = [
                ["id" => 101, "name" => "usb 32 hp", "price" => 340],
                ["id" => 103, "name" => "t shirt", "price" => 40],
                ["id" => 104, "name" => "nike air shoes", "price" => 34000]
            ];

            return $data;
        }

        // input => nike air shoes
        // output=> nike-air-shoes
        function slug($str) {
            $slug = str_replace(" ", "_" , $str);
            return $slug;
        }

    }

    $product = new Product()
?>