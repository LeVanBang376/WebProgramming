<?php

    include_once './controllers/userController.php';
    include_once './controllers/userDetailController.php';
    include_once './middleware/auth.php';

    $url = array_filter(explode('/', $_SERVER['REQUEST_URI']));

    $method = $_SERVER['REQUEST_METHOD'];

    session_start();

    if(array_key_exists('3', $url)){ 
        if($url['3'] == 'login' and $method == 'POST'){
            try {
                $data = (array) json_decode(file_get_contents('php://input'));

                if($data and array_key_exists("username", $data) and array_key_exists("password", $data)) {

                    echo UserController::login($data["username"], $data["password"]);

                    http_response_code(200);
                } else {
                    echo json_encode(["message" => 'Login failed, check route']);
                    http_response_code(400);
                }
            } catch(CustomError $e) {
                echo json_encode(['message' => $e->getMessage()]);
                
                http_response_code($e->getStatusCode());
            }
        }
    
        else if($url['3'] == 'changepassword' and $method == 'POST'){
            try {
                $data = (array) json_decode(file_get_contents('php://input'));

                if($data and array_key_exists("password", $data)) {
                    if ( array_key_exists("username", $data)) {
                        $auth = Auth::checkAuth(['admin']);
                        echo UserController::changePassword($data["username"], $data["password"]);
                    }
                    else {
                        $auth = Auth::checkAuth(['user']);
                        echo UserController::changePassword($_SESSION["username"], $data["password"]);
                    }
                    http_response_code(200);
                } else {
                    echo json_encode(["message" => 'Password changing failed, check route']);
                    http_response_code(400);
                }
            } catch(CustomError $e) {
                echo json_encode(['message' => $e->getMessage()]);
                
                http_response_code($e->getStatusCode());
            }
        }
        else if($url['3'] == 'signup' and $method == 'POST'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));
                if($data and array_key_exists("username", $data) and array_key_exists("password", $data) 
                        and array_key_exists('fullname', $data) and array_key_exists('phone_number', $data) 
                        and array_key_exists('address', $data) and array_key_exists('avatar', $data) 
                        and array_key_exists('gender', $data) and array_key_exists('dateofbirth', $data) 
                        and array_key_exists('email', $data)) {
                    
                    echo UserController::signup($data["username"], $data["password"]);
                    $auth = Auth::giveAuth($_SESSION['token']);
                    echo UserDetailController::createUserDetail($_SESSION['user_id'], $data);

                    http_response_code(200);
                } else {
                    echo json_encode(["message" => 'Signup failed, check route']);
                    http_response_code(400);
                }
            } catch(CustomError $e) {
                echo json_encode(['message' => $e->getMessage()]);

                http_response_code($e->getStatusCode());
            }
        }
        else if($url['3'] == 'kill' and $method == 'DELETE'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));
                if($data and array_key_exists("id", $data)){
                    $auth = Auth::checkAuth(['admin']);
                    echo UserController::deleteUser($data['id']);
                    http_response_code(200);
                }
                else{
                    echo json_encode(['message' => 'Invalid input']);
                    http_response_code(400);
                }            
            } catch(CustomError $e) {
                echo json_encode(['message' => $e->getMessage()]);

                http_response_code($e->getStatusCode());
            }
        }
        else{
            http_response_code(404);
            echo json_encode(["message" => 'Do you know da wei inside user']);
        }
    }
    else{
        http_response_code(404);
        echo json_encode(["message" => 'Do you know da wei to user?']);
    }
    session_destroy()
?>