<?php
include_once './config/db.php';

class NewsComment{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new database();
        $conn = $db->connect();

        $this->conn = $conn;
    }

    public function getAllComments(){
        try{
            $query = "SELECT * FROM news_comment";

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
            $query = "SELECT * FROM news_comment WHERE id = '$id'";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function getCommentByNewsId($news_id){
        try{
            $query = "SELECT * FROM news_comment WHERE news_id = '$news_id'";

            $result = $this->conn->prepare($query);
            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function createNewsComment($info){
        try{
            $user_id = $info['user_id'];

            $news_id = $info['news_id'];
            
            $content = $info['content'];

            $rate = $info['rate'];

            $query = "INSERT INTO news_comment (user_id, news_id, content, rate) VALUES ('$user_id', '$news_id', '$content', '$rate')";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function updateNewsComment($info){
        try{
            $id = $info['id'];

            $content = $info['content'];

            $rate = $info['rate'];

            $query = "UPDATE news_comment SET content = '$content', rate = '$rate' WHERE id = '$id'";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function deleteNewsComment($id){
        try{
            $query = "DELETE FROM news_comment WHERE id = '$id'";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }
}
?>