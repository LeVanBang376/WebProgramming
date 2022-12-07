<?php
         header('Content-Type: application/json, charset=utf-8');
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Credentials: true');
	header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Requested-With, Authorization, X-Auth-Token');
    header('Access-Control-Expose-Headers: Content-Type, Content-Length, X-JSON, Set-Cookie, ');
	$method = $_SERVER['REQUEST_METHOD'];
	if ($method == "OPTIONS") {
    	header('Access-Control-Allow-Origin: http://localhost:3000');
    	header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
    	header("HTTP/1.1 200 OK");
    die();
	}
    
    include_once './vendor/autoload.php';
        
    $dotenv = Dotenv\Dotenv::createMutable(__DIR__);
    $dotenv->load();

    include_once './config/db.php';
    if(isset($_SERVER['REDIRECT_URL'])){
        $url = array_filter(explode('/', $_SERVER['REDIRECT_URL']));
        if(array_key_exists('2', $url)){
            if($url['2'] == 'auth'){
                include './routes/authRoute.php';
            }
            else if($url['2'] == 'user'){
                include './routes/userDetailRoute.php';
            }
            else if($url['2'] == 'news'){
                include './routes/newsRoute.php';
            }
            else if($url['2'] == 'product'){
                include './routes/productRoute.php';
            }
            else if($url['2'] == 'newscmt'){
                include './routes/newsCmtRoute.php';
            }
            else if($url['2'] == 'productcmt'){
                include './routes/productCmtRoute.php';
            }
            else if($url['2'] == 'bill'){
                include './routes/billRoute.php';
            }
            else if($url['2'] == 'order'){
                include './routes/orderRoute.php';
            }

            else{
                http_response_code(404);
                echo json_encode(["message" => 'Something\'s wrong with your API, check Axios[2]!']);
            }
        }
        else{
            http_response_code(404);
            echo json_encode(["message" => 'Something\'s wrong with your API, check Axios[1]!']);
        }
    }
    else{
        http_response_code(404);
        echo json_encode(["message" => 'Do you know da wei?']);
    }
?>