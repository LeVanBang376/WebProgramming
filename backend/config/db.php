<?php

class Database {

    private $servername;
    private $username;
    private $db_name;
    private $db_password;

    public function __construct(){

        $this->conn = null;
        $this->servername =  $_ENV['DB_SERVER_NAME'];
        $this->username = $_ENV['DB_USER_NAME'];
        $this->db_name = $_ENV['DB_NAME'];
        $this->db_password = $_ENV['DB_PASSWORD'];

    }

    public function connect() {
        try {
            $conn = new PDO("mysql:host=$this->servername;dbname=$this->db_name", $this->username, $this->db_password);
            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        }
        catch(PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }
}

    