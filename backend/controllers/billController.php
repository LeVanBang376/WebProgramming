<?php
include_once './models/billModel.php';
include_once './middleware/error/custom_error.php';

class BillController{
    public static function getAllBills(){
        $temp = new Bill();

        $bill = $temp->getAllBills();

        if($bill->rowCount() > 0){
            $rows = $bill->fetchAll(PDO::FETCH_ASSOC);

            return json_encode(["data" => $rows]);
        }

        throw new NotFoundError("No bill");
    }

    public static function getBill($user_id){
        $temp = new Bill();

        $bill = $temp->getBill($user_id);

        if($bill->rowCount() > 0){
            $rows = $bill->fetchAll(PDO::FETCH_ASSOC);

            return json_encode(["data" => $rows]);
        }

        throw new NotFoundError("Bill not found, weird");
    }

   
    public static function createBill($info){
        $temp = new Bill();

        $bill = $temp->createBill($info);

        return json_encode(["message" => "Bill created successfully"]);
    }
}
?>