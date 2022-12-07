<?php
include_once './config/db.php';

class Order{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new database();
        $conn = $db->connect();

        $this->conn = $conn;
    }

    public function getAllOrder(){
        try{
            $query = "SELECT * from order";
            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!');
        }
    }

    public function getOrderById($user_id, $product_id){
        try{
            $query = "SELECT * FROM `order` WHERE user_id = '$user_id' and product_id = '$product_id'";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!');
        }
    }

    public function getOrderByProduct($product_id){
        try{
            $query = "SELECT * FROM `order` WHERE product_id = '$product_id'";

            $result = $this->conn->prepare($query);

            $result->execute();
            
            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!');
        }
    }

    public function getOrderByUser($user_id){
        try{
            $query = "SELECT * FROM `order` WHERE user_id = '$user_id'";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!');
        }
    }

    public function createOrder($info){
        try{
            $user_id = $_SESSION['user_id'];

            $product_id = $info['product_id'];

            $num = $info['num'];
           
            $query = "INSERT INTO  `order` (user_id, product_id, num) VALUES ('$user_id', '$product_id', '$num')";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!');
        }
    }

    public function updateOrder($user_id, $info){
        try{
            $num = $info['num'];

            $product_id = $info['product_id'];
            
            $query = "UPDATE `order` SET num = '$num' WHERE user_id = '$user_id' and product_id  = '$product_id'";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!');
        }
    }

    public function deleteOrder($id){
        try{
            $query = "DELETE FROM order WHERE id = '$id'";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!');
        }
    }
}
?>