<?php
    // $conn = mysqli_connect("localhost", "root", "", "lms107");
    class DB {
        public $conn;
        private $host = "localhost";
        private $root = "root";
        private $pswd = "";
        private $dbnm = "lms107";


        function __construct() {
            try {
                mysqli_connect($this->host, $this->root, $this->pswd, $this->dbnm);
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        function query($q) {
            return mysqli_query($this->conn, $q);
        }
    }

    $db = new DB();
?>

