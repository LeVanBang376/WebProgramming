<?php

include_once './models/userDetailModel.php';
include_once './middleware/error/custom_error.php';

class UserDetailController{
    public static function getAllUserDetails(){
        $temp = new UserDetail();

        $user_info = $temp->getAllUserDetails();

        if($user_info->rowCount() > 0){
            $rows = $user_info->fetchAll(PDO::FETCH_ASSOC);

            return json_encode(["data" => $rows]);
        }

        throw new NotFoundError("No user, weird");
    }


    public static function getUserDetail($user_id){
        $temp = new UserDetail();

        $user_info = $temp->getUserDetailById($user_id);

        if($user_info->rowCount() > 0){
            $row = $user_info->fetch(PDO::FETCH_ASSOC);

            return json_encode(["data" => $row]);
        }

        throw new NotFoundError("User info not found!");
    }


    public static function updateUserDetail($user_id, $info){
        $temp = new UserDetail();

        $user_info = $temp->getUserDetailById($user_id);

        if($user_info->rowCount() == 0){
            throw new BadRequestError('No user info?');
        }

        $new_user_info = $temp->updateUserDetail($user_id, $info);

        return json_encode(["message" => "User info updated successfully"]);

    }

 
    public static function createUserDetail($user_id, $info){
        $temp = new UserDetail();

        $user_info = $temp->getUserDetailById($user_id);

        if($user_info->rowCount() > 0){
            throw new BadRequestError('User info already exists!');
        }

        $user_info = $temp->createUserDetail($user_id, $info);

        return json_encode(["message" => "User info created successfully"]);
    }
}

?>