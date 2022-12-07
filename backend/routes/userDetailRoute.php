<?php
    include_once './controllers/userDetailController.php';
    include_once './middleware/auth.php';

    $url = array_filter(explode('/', $_SERVER['REQUEST_URI']));

    $method = $_SERVER['REQUEST_METHOD'];

    session_start();

    if(array_key_exists('3', $url)){
        if($url['3'] == 'getall' and $method == 'GET'){
            try{
                $auth = Auth::checkAuth(['admin']);
                echo UserDetailController::getAllUserDetails();
                http_response_code(200);
            }
            catch(CustomError $e){
                echo json_encode(['message' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }
    }
    else if(!array_key_exists('3', $url)){
        if($method == 'GET'){
            try{
                if(array_key_exists('REDIRECT_QUERY_STRING', $_SERVER)){
                    $query = array_filter(explode('=', $_SERVER['REDIRECT_QUERY_STRING']));
                    if(count($query) == 2){
                        if(in_array('id', $query)){
                            $user_id = $query['1'];
                            if($user_id != '1')
                                $auth = Auth::checkAuth(['admin']);
                            echo UserDetailController::getUserDetail($user_id);
                            http_response_code(200);
                        }
                        else{
                            echo json_encode(['message' => 'Invalid input']);
                            http_response_code(400);
                        }
                    } else {
                        echo json_encode(['message' => 'Invalid input']);
                        http_response_code(400);
                    }
                }
                else {
                    $auth = Auth::checkAuth(['user', 'admin']);     
                    echo UserDetailController::getUserDetail($_SESSION['user_id']);
                    http_response_code(200);
                }    
                
            }
            catch(CustomError $e){
                echo json_encode(['message' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }
        else if($method == 'PUT'){
            try{
                if(array_key_exists('REDIRECT_QUERY_STRING', $_SERVER)){
                    $query = array_filter(explode('=', $_SERVER['REDIRECT_QUERY_STRING']));
                    if(count($query) == 2){
                        if(in_array('id', $query)){
                            $auth = Auth::checkAuth(['admin']);
                            $user_id = $query['1'];
                            $data = (array) json_decode(file_get_contents('php://input'));
                            if($data and array_key_exists('fullname', $data) and array_key_exists('phone_number', $data) and array_key_exists('address', $data) 
                                    and array_key_exists('avatar', $data) and array_key_exists('gender', $data) and array_key_exists('dateofbirth', $data) and array_key_exists('email', $data)){
                                // $auth = Auth::checkAuth(['user', 'admin']);
                                echo UserDetailController::updateUserDetail($user_id, $data);
                                http_response_code(200);
                            } else {
                                echo json_encode(['message' => 'Invalid input']);
                                http_response_code(400);
                            }                
                        }     
                    } else {
                        echo json_encode(['message' => 'Invalid input']);
                        http_response_code(400);
                    }
                }
                else{
                    $auth = Auth::checkAuth(['user', 'admin']);
                    $data = (array) json_decode(file_get_contents('php://input'));
                    if($data and array_key_exists('fullname', $data) and array_key_exists('phone_number', $data) and array_key_exists('address', $data) 
                        and array_key_exists('avatar', $data) and array_key_exists('gender', $data) and array_key_exists('dateofbirth', $data) and array_key_exists('email', $data)){
                        echo UserDetailController::updateUserDetail($_SESSION['user_id'], $data);
                        http_response_code(200);
                    }
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
    else{
        http_response_code(404);
        echo json_encode(["message" => 'Not found API!!!']);
    }

    session_destroy();

?>