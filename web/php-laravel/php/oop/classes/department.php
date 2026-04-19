<?php

 class Department extends DB {

    function get_departments() {
        $sts = "select * from departments";
        return $db->query($sts);
    }
    
 }

 $dept = new Department();
?>