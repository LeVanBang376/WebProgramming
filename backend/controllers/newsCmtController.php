<?php
include_once './models/newsCmtModel.php';
include_once './middleware/error/custom_error.php';

class NewsCommentController{
    
    public static function getAllComment(){
        $temp = new NewsComment();

        $comments = $temp->getAllComments();

        if($comments->rowCount() > 0){
            $rows = $comments->fetchAll(PDO::FETCH_ASSOC);

            return json_encode(["data" => $rows]);
        }

        throw new NotFoundError("Comments not found!!!");
    }

    public static function getCommentByNewsId($news_id){
        $temp = new NewsComment();
        $comments = $temp->getCommentByNewsId($news_id);

        if($comments->rowCount() > 0){
            $rows = $comments->fetchAll(PDO::FETCH_ASSOC);

            return json_encode(["data" => $rows]);
        }

        throw new NotFoundError("Comments not found!!!");
    }

    public static function createNewsComment($info){
        $temp = new NewsComment();

        $new_comment = $temp->createNewsComment($info);

        return json_encode(["message" => "Comment create successfully!"]);
    }

    public static function updateNewsComment($info){
        $temp = new NewsComment();

        $comment = $temp->getCommentById($info['id']);

        if($comment->rowCount() == 0){
            throw new BadRequestError('Comment not found');
        }

        $new_comment = $temp->updateNewsComment($info);

        return json_encode(["message" => "Comment updated successfully"]);
    }
    
    public static function deleteNewsComment($id){
        $temp = new NewsComment();

        $comment = $temp->getCommentById($id);

        if($comment->rowCount() == 0){
            throw new BadRequestError('Comment not found');
        }

        $new_comment = $temp->deleteNewsComment($id);

        return json_encode(["message" => "Comment deleted successfully"]);
    }
}
?>