<?php

include_once './middleware/error/custom_error.php';

class UserDetail
{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new database();
        $conn = $db->connect();

        $this->conn = $conn;
    }
    
    public function getAllUserDetails(){
        try{
            $query = "SELECT user_id, username, fullname, gender, dateofbirth, phone_number, email, address, avatar FROM user_detail join user on user_detail.user_id = user.id";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function getUserDetailById($user_id){
        try{
            $query = "SELECT * FROM user_detail WHERE user_id = '$user_id'";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!');
        }
    }

    public function updateUserDetail($user_id, $info){
        try{
            $fullname = $info['fullname'];

            $phone_number = $info['phone_number'];

            $address = $info['address'];

            $avatar = $info['avatar'];

            $gender = $info['gender'];

            $dateofbirth = $info['dateofbirth'];

            $email = $info['email'];

            $query = "UPDATE user_detail SET fullname = '$fullname', phone_number = '$phone_number', address = '$address', avatar = '$avatar', gender = '$gender', dateofbirth = '$dateofbirth', email = '$email' WHERE user_id = '$user_id'";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!');
        }

    }

    public function createUserDetail ($user_id, $info){
        try{
            $fullname = $info['fullname'];

            $phone_number = $info['phone_number'];

            $address = $info['address'];

            $avatar = $info['avatar'];

            $gender = $info['gender'];

            $dateofbirth = $info['dateofbirth'];

            $email = $info['email'];

            $query = "INSERT INTO user_detail VALUES ('$user_id', '$fullname', '$phone_number', '$address', '$avatar', '$gender', '$dateofbirth', '$email')";

            $result = $this->conn->prepare($query);

            $result->execute();

        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!');
        }
    }
}
?>