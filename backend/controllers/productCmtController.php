<?php
include_once './models/productCmtModel.php';
include_once './middleware/error/custom_error.php';

class ProductCommentController{
  
    public static function getAllComment(){
        $temp = new ProductComment();

        $comments = $temp->getAllComments();

        if($comments->rowCount() > 0){
            $rows = $comments->fetchAll(PDO::FETCH_ASSOC);

            return json_encode(["data" => $rows]);
        }

        throw new NotFoundError("Comments not found!!!");
    }
   
    public static function getCommentByProductId($product_id){
        $temp = new ProductComment();

        $comments = $temp->getCommentByProductId($product_id);

        if($comments->rowCount() > 0){
            $rows = $comments->fetchAll(PDO::FETCH_ASSOC);

            return json_encode(["data" => $rows]);
        }

        throw new NotFoundError("Comments not found!!!");
    }
    
    public static function createProductComment($info){
        $temp = new ProductComment();

        $new_comment = $temp->createProductComment($info);

        return json_encode(["message" => "Comment create succressfully!"]);
    }

    public static function updateProductComment($info){
        $temp = new ProductComment();

        $comment = $temp->getCommentById($info['id']);

        if($comment->rowCount() == 0){
            throw new BadRequestError('Comment not found');
        }

        $new_comment = $temp->updateProductComment($info);

        return json_encode(["message" => "Comment updated successfully"]);
    }
    
    public static function deleteProductComment($id){
        $temp = new ProductComment();

        $comment = $temp->getCommentById($id);

        if($comment->rowCount() == 0){
            throw new BadRequestError('Comment not found');
        }

        $new_comment = $temp->deleteProductComment($id);

        return json_encode(["message" => "Comment deleted successfully"]);
    }
}
?>