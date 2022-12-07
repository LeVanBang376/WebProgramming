<?php
include_once './models/productModel.php';
include_once './middleware/error/custom_error.php';

class ProductController{
    public static function getAllProduct(){
        $temp = new Product();

        $products = $temp->getAllProduct();

        if($products->rowCount() > 0){
            $rows = $products->fetchAll(PDO::FETCH_ASSOC);

            return json_encode(["data" => $rows]);
        }

        throw new NotFoundError("Products not found");
    }

    public static function getProductById($news_id){
        $temp = new Product();

        $new = $temp->getProductById($news_id);

        if($new->rowCount() > 0){
            $row = $new->fetch(PDO::FETCH_ASSOC);

            return json_encode(["data" => $row]);
        }

        throw new NotFoundError("Product not found");
    }

    public static function createProduct($info){
        $temp = new Product();

        $new_product = $temp->createProduct($info);

        return json_encode(["message" => "Product create successfully"]);
    }

    public static function updateProduct($product_id, $info){
        $temp = new Product();

        $product = $temp->getProductById($product_id);

        if($product->rowCount() == 0){
            throw new BadRequestError('Product not found');
        }

        $new_product = $temp->updateProduct($product_id, $info);

        return json_encode(["message" => "Product updated successfully"]);
    }

    public static function deleteProduct($product_id){
        $temp = new Product();

        $product = $temp->getProductById($product_id);

        if($product->rowCount() == 0){
            throw new BadRequestError('Product has not been created');
        }

        $new_product = $temp->deleteProduct($product_id);

        return json_encode(["message" => "Product deleted successfully"]);
    }
}
?>