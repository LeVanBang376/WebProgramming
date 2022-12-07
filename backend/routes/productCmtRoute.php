<?php
    include_once './controllers/productCmtController.php';
    include_once './middleware/auth.php';

    $url = array_filter(explode('/', $_SERVER['REQUEST_URI']));

    $method = $_SERVER['REQUEST_METHOD'];

    session_start();

    if(array_key_exists('3', $url)){
        if($url['3'] == 'getall' and $method == 'GET'){
            try{
                echo ProductCommentController::getAllComment();
                http_response_code(200);
            }
            catch(CustomError $e){
                echo json_encode(['message' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }
        else{
            http_response_code(404);
            echo json_encode(["message" => 'Not found API!!!']);
        }

    }
    else{
        if($method == 'GET'){
            try{
                $query = array_filter(explode('=', $_SERVER['REDIRECT_QUERY_STRING']));
                if(count($query) == 2){
                    if(in_array('id', $query)){
                        $product_id = $query['1'];
                    
                        echo ProductCommentController::getCommentByProductId($product_id);
    
                        http_response_code(200);
                    }
                    else{
                        echo json_encode(['message' => 'Invalid input']);
                        http_response_code(400);
                    }
                }
                else{
                    echo json_encode(['message' => 'Invalid input']);
                    http_response_code(400);
                }

            }
            catch(CustomError $e){
                echo json_encode(['message' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }
        else if($method == 'POST'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));
                
                if($data and array_key_exists('user_id', $data) and array_key_exists('product_id', $data) 
                        and array_key_exists('content', $data)  and array_key_exists('rate', $data)){        
                    
                    echo ProductCommentController::createProductComment($data);
                    http_response_code(200);

                }
                else{
                    echo json_encode(['message' => 'Invalid input']);
                    http_response_code(400);
                }
            }
            catch(CustomError $e){
                echo json_encode(['message' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }
        else if($method == 'PUT'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));
                
                if($data and array_key_exists('id', $data)
                        and array_key_exists('content', $data)  and array_key_exists('rate', $data)){

                    $auth = Auth::checkAuth(['admin']);
                    echo ProductCommentController::updateProductComment($data);
                    http_response_code(200);

                }
                else{
                    echo json_encode(['message' => 'Invalid input']);
                    http_response_code(400);
                }
            }
            catch(CustomError $e){
                echo json_encode(['message' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }
        else if($method == 'DELETE'){
            try {
                $data = (array) json_decode(file_get_contents('php://input'));
                if($data and array_key_exists('id', $data)){
                    $auth = Auth::checkAuth(['admin']);
                    echo ProductCommentController::deleteProductComment($data['id']);
                    http_response_code(200);
                }
                else{
                    echo json_encode(['message' => 'Invalid input']);
                    http_response_code(400);
                }
            }
            catch(CustomError $e){
                echo json_encode(['message' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }
        else{
            http_response_code(404);
            echo json_encode(["message" => 'Do you know dawei to News Comment']);
        }
        
    }
    session_destroy()
?>