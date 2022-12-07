<?php
include_once './config/db.php';

class ProductComment{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new database();
        $conn = $db->connect();

        $this->conn = $conn;
    }

    public function getAllComments(){
        try{
            $query = "SELECT * FROM product_comment";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function getCommentById($id){
        try{
            $query = "SELECT * FROM product_comment WHERE id = '$id'";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function getCommentByProductId($product_id){
        try{
            $query = "SELECT * FROM product_comment WHERE product_id = '$product_id'";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function createProductComment($info){
        try{
            $user_id = $info['user_id'];

            $product_id = $info['product_id'];
            
            $content = $info['content'];

            $rate = $info['rate'];

            $query = "INSERT INTO product_comment (user_id, product_id, content, rate) VALUES ('$user_id', '$product_id', '$content', '$rate')";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function updateProductComment($info){
        try{
            $id = $info['id'];

            $content = $info['content'];

            $rate = $info['rate'];

            $query = "UPDATE product_comment SET content = '$content', rate = '$rate' WHERE id = '$id'";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function deleteProductComment($id){
        try{
            $query = "DELETE FROM product_comment WHERE id = '$id'";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }
}
?>