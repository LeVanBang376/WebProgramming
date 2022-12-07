<?php

include_once './middleware/error/custom_error.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class Auth{

    final public static function checkAuth($roles){
        $headers = apache_request_headers();
        if(array_key_exists('Authorization', $headers)){
            $token = str_replace('Bearer ', '', $headers['Authorization']);
            $key = $_SERVER['SECRET_KEY'];

            try{
                $decode = (array) JWT::decode($token, new Key($key, 'HS256'));
            }
            catch(Exception $e){
                throw new UnauthenticatedError('Invalid token');
            }

            if(in_array($decode['role'], $roles)){
                $_SESSION['user_id'] = $decode['id'];
                $_SESSION['username'] = $decode['username'];
                $_SESSION['role'] = $decode['role'];
                return;
            }

            throw new UnauthorizedError('Try to be higher please?');
        }
        else{
            throw new UnauthenticatedError('Header Token please?');
        }
    }

    final public static function giveAuth($token){
        $key = $_SERVER['SECRET_KEY'];

        try{
            $decode = (array) JWT::decode($token, new Key($key, 'HS256'));
        }
        catch(Exception $e){
            throw new UnauthenticatedError('Invalid token');
        }

        $_SESSION['user_id'] = $decode['id'];
        $_SESSION['username'] = $decode['username'];
        $_SESSION['role'] = $decode['role'];
        $_SESSION['token'] = null;
        return;
    }
    
}

?>