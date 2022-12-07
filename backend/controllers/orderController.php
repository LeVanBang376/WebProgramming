<?php
include_once './models/orderModel.php';
include_once './middleware/error/custom_error.php';

class OrderController{
    public static function getAllOrders(){
        $temp = new Order();

        $new = $temp->getAllOrder();

        if($new->rowCount() > 0){
            $rows = $new->fetchAll(PDO::FETCH_ASSOC);

            return json_encode(["data" => $rows]);
        }

        throw new NotFoundError("Order not found");
    }

    public static function getOrderById($user_id, $product_id){
        $temp = new Order();

        $new = $temp->getOrderById($user_id, $product_id);

        if($new->rowCount() > 0){
            $row = $new->fetch(PDO::FETCH_ASSOC);

            return json_encode(["data" => $row]);
        }

        throw new NotFoundError("Order not found");
    }

    public static function getOrderByUser($user_id){
        $temp = new Order();

        $new = $temp->getOrderByUser($user_id);

        if($new->rowCount() > 0){
            $row = $new->fetchAll(PDO::FETCH_ASSOC);

            return json_encode(["data" => $row]);
        }

        throw new NotFoundError("Order not found");
    }

    public static function getOrderByProduct($product_id){
        $temp = new Order();
   
        $new = $temp->getOrderByProduct($product_id);

        
        if($new->rowCount() > 0){
            $row = $new->fetchAll(PDO::FETCH_ASSOC);
 
            return json_encode(["data" => $row]);
        }

        throw new NotFoundError("Order not found");
    }

    public static function createOrder($info){
        $temp = new Order();

        $new_order = $temp->createOrder($info);

        return json_encode(["message" => "Order create successfully"]);
    }

    public static function updateOrder($user_id, $info){
        $temp = new Order();

        $product = $temp->getOrderById($user_id, $info['product_id']);

        if($product->rowCount() == 0){
            throw new BadRequestError('Order not found');
        }

        $new_product = $temp->updateOrder($user_id, $info);

        return json_encode(["message" => "Order updated successfully"]);
    }

    public static function deleteOrder($id){
        $temp = new Order();

        $product = $temp->getOrderById($product_id);

        if($product->rowCount() == 0){
            throw new BadRequestError('Order not found');
        }

        $new_product = $temp->deleteOrder($id);

        return json_encode(["message" => "Order deleted successfully"]);
    }
}
?>