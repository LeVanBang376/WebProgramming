<?php

include_once './middleware/error/custom_error.php';

class User{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new Database();
        $conn = $db->connect();
        $this->conn = $conn;
    }

    public function getUserByUsername($username){
        try{
            $query = "SELECT * FROM user WHERE username = '$username'";

            $result = $this->conn->prepare($query);
            
            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!');
        }

    }

    public function getUserById($id){
        try{
            $query = "SELECT * FROM user WHERE id = '$id'";

            $result = $this->conn->prepare($query);
 
            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!');
        }
    }

    public function insertUser($username, $password){

        try {
            
            $query = "INSERT INTO user (username, password, role) VALUES ('$username', '$password', 'user')";

            $result = $this->conn->prepare($query);

            $result->execute();
            
            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }

    }

    public function changePassword($username, $password){

        try {
            $query = "UPDATE user SET password = '$password' WHERE username = '$username'";

            $result = $this->conn->prepare($query);

            $result->execute();
            
            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function deleteUser($id){
        try{
            $query = "DELETE FROM user WHERE id = '$id'";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

}
?>