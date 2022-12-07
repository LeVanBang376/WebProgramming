<?php
include_once './config/db.php';

class Product{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new database();
        $conn = $db->connect();

        $this->conn = $conn;
    }

    public function getAllProduct(){
        try{
            $query = "SELECT * from product";
            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!');
        }
    }

    public function getProductById($id){
        try{
            $query = "SELECT * FROM product WHERE id = '$id'";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!');
        }
    }

    public function createProduct($info){
        try{
            $title = $info['title'];

            $price = $info['price'];

            $thumbnail = $info['thumbnail'];

            $description = $info['description'];

            $query = "";

            if(array_key_exists('discount', $info)){
                $discount = $info['discount'];
                $query = "INSERT INTO  product (title, price, discount, thumbnail, description) VALUES ('$title', '$price', '$discount', '$thumbnail', '$description')";
            }else{
                $query = "INSERT INTO  product (title, price, discount, thumbnail, description) VALUES ('$title', '$price', NULL, '$thumbnail', '$description')";
            }
            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!');
        }
    }

    public function updateProduct($product_id, $info){
        try{
            $title = $info['title'];

            $price = $info['price'];

            $thumbnail = $info['thumbnail'];

            $description = $info['description'];

            $discount = $info['discount'];

            $query = "UPDATE product SET title = '$title', price = '$price', discount = '$discount', thumbnail = '$thumbnail', description = '$description' WHERE id = '$product_id'";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!');
        }
    }

    public function deleteProduct($product_id){
        try{
            $query = "DELETE FROM product WHERE id = '$product_id'";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!');
        }
    }
}
?>