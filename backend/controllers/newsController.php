<?php

include_once './models/newsModel.php';
include_once './middleware/error/custom_error.php';
//add get news by title
class NewsController{
    public static function getAllNews(){
        $temp = new News();

        $new = $temp->getAllNews();

        if($new->rowCount() > 0){
            $rows = $new->fetchAll(PDO::FETCH_ASSOC);

            return json_encode(["data" => $rows]);
        }

        throw new NotFoundError("News not found!");
    }

    public static function getNewsById($news_id){
        $temp = new News();

        $new = $temp->getNewsById($news_id);

        if($new->rowCount() > 0){
            $row = $new->fetch(PDO::FETCH_ASSOC);

            return json_encode(["data" => $row]);
        }

        throw new NotFoundError("News not found!!!");
    }

    public static function createNews($info){
        $temp = new News();

        $new_news = $temp->createNews($info);

        return json_encode(["message" => "News created successfully"]);
    }

    public static function updateNews($news_id, $info){
        $temp = new News();

        $new = $temp->getNewsById($news_id);

        if($new->rowCount() == 0){
            throw new BadRequestError('News not found');
        }

        $new_news = $temp->updateNews($news_id, $info);

        return json_encode(["message" => "News updated successfully"]);
    }

    public static function deleteNews($news_id){
        $temp = new News();

        $new = $temp->getNewsById($news_id);

        if($new->rowCount() == 0){
            throw new BadRequestError('News not found');
        }

        $new_news = $temp->deleteNews($news_id);

        return json_encode(["message" => "News deleted successfully"]);
    }
}

?>