<?php
    include_once './controllers/orderController.php';
    include_once './middleware/auth.php';

    $url = array_filter(explode('/', $_SERVER['REQUEST_URI']));

    $method = $_SERVER['REQUEST_METHOD'];

    session_start();

    if(array_key_exists('3', $url)){
        if($url['3'] == 'getall' and $method == 'GET'){
            try{
                $auth = Auth::checkAuth(['admin']);

                echo OrderController::getAllOrders();
                http_response_code(200);

            } catch(CustomError $e){
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
        if($method == 'POST'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));

                if($data and array_key_exists('product_id', $data) and array_key_exists('num', $data)){ 
                    
                    $auth = Auth::checkAuth(['user', 'admin']);

                    echo OrderController::createOrder($data);

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
        else if($method == 'GET'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));

                if($data){
                    if (array_key_exists('product_id', $data)){
                        $auth = Auth::checkAuth(['user','admin']);

                        if( $_SESSION['role'] == 'user')
                            echo OrderController::getOrderById($_SESSION['user_id'], $data['product_id']);
                        else 
                            echo OrderController::getOrderByProduct($data['product_id']);
                    }
                    else if (array_key_exists('user_id', $data)){
                        $auth = Auth::checkAuth(['admin']);
                        echo OrderController::getOrderByUser($data['user_id']);
                    }
                    else {
                        echo json_encode(['message' => 'Invalid input']);
                        http_response_code(400);
                    }      
                    http_response_code(200);
                }
                else{
                    $auth = Auth::checkAuth(['admin', 'user']);
                    echo OrderController::getOrderByUser($_SESSION['user_id']);
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

                if($data and array_key_exists('num', $data)){         
                    $auth = Auth::checkAuth(['user', 'admin']);
                    echo OrderController::updateOrder($_SESSION['user_id'], $data);
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
                    echo OrderController::deleteOrder($data);
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
            echo json_encode(["message" => 'Not found API!!!']);
        }
    }
?>