<?php
    include_once './controllers/newsController.php';
    include_once './middleware/auth.php';

    $url = array_filter(explode('/', $_SERVER['REQUEST_URI']));

    $method = $_SERVER['REQUEST_METHOD'];

    session_start();

    if(array_key_exists('3', $url)){
        if($url['3'] == 'getall' and $method == 'GET'){
            try{
                echo NewsController::getAllNews();
                http_response_code(200);
            }
            catch(CustomError $e){
                echo json_encode(['message' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }
        else{
            http_response_code(404);
            echo json_encode(["message" => 'Not found API!']);
        }

    }
    else{
        if($method == 'GET'){
            try{
                $query = array_filter(explode('=', $_SERVER['REDIRECT_QUERY_STRING']));
                if(count($query) == 2){
                    if(in_array('id', $query)){
                        $news_id = $query['1'];
                    
                        echo NewsController::getNewsById($news_id);
    
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
                if($data and array_key_exists('title', $data) and array_key_exists('content', $data) and array_key_exists('thumbnail', $data)){
                    
                    $auth = Auth::checkAuth(['admin']);

                    echo NewsController::createNews($data);
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
                $query = array_filter(explode('=', $_SERVER['REDIRECT_QUERY_STRING']));
                if(count($query) == 2){
                    if(in_array('id', $query)){
                        $news_id = $query['1'];
                        $data = (array) json_decode(file_get_contents('php://input'));
                        if($data  and array_key_exists('title', $data) and array_key_exists('content', $data) and array_key_exists('thumbnail', $data)){
                            $auth = Auth::checkAuth(['admin']);        
                            echo NewsController::updateNews($news_id, $data);
                            http_response_code(200);
                        }
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
        else if($method == 'DELETE'){
            try{
                $query = array_filter(explode('=', $_SERVER['REDIRECT_QUERY_STRING']));
                if(count($query) == 2){
                    if(in_array('id', $query)){
                        $news_id = $query['1'];
                        $auth = Auth::checkAuth(['admin']);
                        echo NewsController::deleteNews($news_id);
    
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
    }
    session_destroy();

?>