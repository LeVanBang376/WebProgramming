<?php
include_once './config/db.php';

class Bill{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new database();
        $conn = $db->connect();

        $this->conn = $conn;
    }

    public function getAllBills(){
        try{
            $query = "SELECT * FROM bill";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function getBill(){
        try{
            $user_id = $_SESSION['user_id'];

            $query = "SELECT * FROM bill WHERE user_id = '$user_id'";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError($e);
        }
    }


    public function createBill($info){
        try{
            $user_id = $_SESSION['user_id'];

            $note = $info['note'];

            $status = $info['status'];

            $query = "INSERT INTO bill (user_id, note, status) VALUES ('$user_id', '$note', '$status')";
      
            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }
}
?>