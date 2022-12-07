<?php

include_once './middleware/error/custom_error.php';

class News{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new database();
        $conn = $db->connect();

        $this->conn = $conn;
    }

    public function getAllNews(){
        try{
            $query = "SELECT * FROM news";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function getNewsById($news_id){
        try{
            $query = "SELECT * FROM news WHERE id = '$news_id'";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function getNewsByTitle($title){
        try{
            $query = "SELECT * FROM news WHERE title = '$title'";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function updateNews($news_id, $info){
        try{

            $title = $info['title'];

            $content = $info['content'];

            $thumbnail = $info['thumbnail'];

            $query = "UPDATE news SET title = '$title', content = '$content', thumbnail = '$thumbnail' WHERE id = '$news_id'";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function createNews($info){
        try{
            $title = $info['title'];

            $content = $info['content'];

            $thumbnail = $info['thumbnail'];

            $query = "INSERT INTO news (title, content, thumbnail) VALUES ('$title', '$content', '$thumbnail')";
            
            $result = $this->conn->prepare($query);
 
            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function deleteNews($news_id){
        try{
            $query = "DELETE FROM news WHERE id = '$news_id'";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }
}
?>