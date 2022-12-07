SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+08:00";


CREATE TABLE `user` (
    `id` int AUTO_INCREMENT,
    `username` varchar(255) NOT NULL UNIQUE,
    `password` varchar(255) NOT NULL,
    `role` varchar(10) NOT NULL,
    CONSTRAINT `pk_usr`     PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO user values ('', "admin", "$2y$10$5r.EI6wSTMVhniLMe46OuOW256CSh/U94MgAXfCUkG1NAiuiTH83a", "admin");

CREATE TABLE `user_detail` (
    `user_id` int NOT NULL,
    `fullname` varchar(255) NOT NULL,
    `phone_number` varchar(10) NOT NULL,
    `address` varchar(255) ,
    `avatar` varchar(255) NOT NULL,
    `gender` varchar(10) NOT NULL,
    `dateofbirth` date NOT NULL,
    `email` varchar(255) NOT NULL,
    CONSTRAINT `pk_usd`     PRIMARY KEY (`user_id`),        
    CONSTRAINT `fk_usd_usr_user_id`     FOREIGN KEY (`user_id`)    
                                        REFERENCES `user`(`id`) 
                                        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




CREATE TABLE `product` (
    `id` int AUTO_INCREMENT,
    `title` varchar(255) DEFAULT NULL,
    `price` int DEFAULT NULL,
    `discount` int DEFAULT 0,
    `thumbnail` varchar(255) DEFAULT NULL,
    `description` longtext,
    CONSTRAINT `pk_pdt`     PRIMARY KEY (`id`)        
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `product_comment` (
    `id` int AUTO_INCREMENT,
    `user_id` int DEFAULT NULL,
    `product_id` int NOT NULL,
    `content` varchar(255) DEFAULT NULL,
    `rate` int DEFAULT NULL,
    `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
    `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT `pk_cmt`     PRIMARY KEY (`id`),
    CONSTRAINT `fk_pcmt_usr_user_id`     FOREIGN KEY(`user_id`)
                                        REFERENCES `user`(`id`)
                                        ON DELETE SET NULL,
    CONSTRAINT `fk_pcmt_pdt_product_id`  FOREIGN KEY(`product_id`)
                                        REFERENCES `product`(`id`)
                                        ON DELETE CASCADE                       
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




CREATE TABLE `news` (
    `id` int AUTO_INCREMENT,
    `title` varchar(255) NOT NULL UNIQUE,
    `content` longtext,
    `thumbnail` varchar(255) DEFAULT NULL,
    CONSTRAINT `pk_news`    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `news_comment` (
    `id` int AUTO_INCREMENT,
    `user_id` int DEFAULT NULL,
    `news_id` int NOT NULL,
    `content` varchar(255) DEFAULT NULL,
    `rate` int DEFAULT NULL,
    `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
    `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT `pk_cmt`     PRIMARY KEY (`id`),
    CONSTRAINT `fk_ncmt_usr_user_id`     FOREIGN KEY(`user_id`)
                                        REFERENCES `user`(`id`)
                                        ON DELETE SET NULL,
    CONSTRAINT `fk_ncmt_nws_news_id` FOREIGN KEY(`news_id`)
                                        REFERENCES `news`(`id`)
                                        ON DELETE CASCADE                       
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




CREATE TABLE `bill` (
    `user_id` int NOT NULL,
    `note` varchar(255) DEFAULT NULL,
    `status` varchar(30) DEFAULT NULL,
    `total_money` int DEFAULT 0,
    CONSTRAINT `fk_usb_usr_user_id`     FOREIGN KEY(`user_id`)      
                                        REFERENCES `user`(`id`) 
                                        ON DELETE CASCADE,
    CONSTRAINT `pk_usb`   PRIMARY KEY(`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `order` (
    `user_id` int NOT NULL,
    `order_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `product_id` int NOT NULL,
    `num` int DEFAULT 1,
    `total_money` int DEFAULT 0,
    CONSTRAINT `fk_orp_usb_user_id`     FOREIGN KEY(`user_id`)      
                                        REFERENCES `bill`(`user_id`)
                                        ON DELETE CASCADE,
    CONSTRAINT `fk_orp_pdt_product_id`  FOREIGN KEY(`product_id`)
                                        REFERENCES `product`(`id`)
                                        ON DELETE CASCADE,
    CONSTRAINT `pk_orp`     PRIMARY KEY(`user_id`, `order_date`, `product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




DELIMITER $$
CREATE OR REPLACE TRIGGER `MoneyPerItem_insert`
BEFORE INSERT ON `order`
FOR EACH ROW BEGIN
	DECLARE `item_price` INT;
    BEGIN
    	SELECT `price` INTO `item_price` FROM `product` WHERE `product`.`id` = NEW.`product_id`;
    	SET NEW.total_money = NEW.num*`item_price`;
    END;
END;
$$
DELIMITER ;

DELIMITER $$
CREATE OR REPLACE TRIGGER `MoneyPerItem_update`
BEFORE UPDATE ON `order`
FOR EACH ROW BEGIN
	DECLARE `item_price` INT;
    BEGIN
    	SELECT `price` INTO `item_price` FROM `product` WHERE `product`.`id` = NEW.`product_id`;
    	SET NEW.total_money = NEW.num*`item_price`;
    END;
END;
$$
DELIMITER ;




DELIMITER $$
CREATE OR REPLACE TRIGGER `TotalMoney_update`
AFTER UPDATE ON `order`
FOR EACH ROW BEGIN
	UPDATE `bill`
    SET `bill`.`total_money` = (SELECT SUM(total_money) FROM `order` o WHERE o.`user_id` = NEW.`user_id`)
    WHERE `bill`.`user_id`= NEW.`user_id`;
END;
$$
DELIMITER ;

DELIMITER $$
CREATE OR REPLACE TRIGGER `TotalMoney_insert`
AFTER INSERT ON `order`
FOR EACH ROW BEGIN
	UPDATE `bill`
    SET `bill`.`total_money` = (SELECT SUM(total_money) FROM `order` o WHERE o.`user_id` = NEW.`user_id`)
    WHERE `bill`.`user_id`= NEW.`user_id`;
END;
$$
DELIMITER ;

DELIMITER $$
CREATE OR REPLACE TRIGGER `TotalMoney_delete`
AFTER delete ON `order`
FOR EACH ROW BEGIN
	UPDATE `bill`
    SET `bill`.`total_money` = (SELECT SUM(total_money) FROM `order` o WHERE o.`user_id` = OLD.`user_id`)
    WHERE `bill`.`user_id`= OLD.`user_id`;
END;
$$
DELIMITER ;


COMMIT;