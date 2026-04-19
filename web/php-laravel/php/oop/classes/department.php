<?php

 class Department extends DB {

    function get_departments() {
        $sts = "select * from departments";
        return $this->query($sts);
    }

    function delete($id) {
        $sts = "delete from departments where id = $id";
        return $this->query($sts);
    }
    
 }

 $dept = new Department();
?>