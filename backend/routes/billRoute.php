<?php
    include_once './controllers/billController.php';
    include_once './middleware/auth.php';

    $url = array_filter(explode('/', $_SERVER['REQUEST_URI']));

    $method = $_SERVER['REQUEST_METHOD'];

    session_start();

    if(array_key_exists('3', $url)){
        if($url['3'] == 'getall' and $method == 'GET'){
            try{
                $auth = Auth::checkAuth(['admin']);

                echo BillController::getAllBills();
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
        if($method == 'POST'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));

                if($data and array_key_exists('note', $data) and array_key_exists('status', $data)){ 
                    
                    $auth = Auth::checkAuth(['admin','user']);

                    echo BillController::createBill($data);

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
                $auth = Auth::checkAuth(['user','admin']);

                echo BillController::getBill($_SESSION['user_id']);

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
?>