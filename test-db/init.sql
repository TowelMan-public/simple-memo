USE simple-memo;

CREATE TABLE memo_list_owner(
	memo_list_owner_id INT PRIMARY KEY AUTO_INCREMENT,
	owner_validity_period  DATETIME NOT NULL,
	is_deleted TINYINT(1) DEFAULT 0
);

CREATE TABLE memo(
	memo_id INT PRIMARY KEY AUTO_INCREMENT,
	memo_list_owner_id INT NOT NULL,
	memo_title VARCHAR(50) NOT NULL,
	memo_content VARCHAR(2000) NOT NULL,

    CONSTRAINT fk_memo_list_owner_id_to_memo
	    FOREIGN KEY (memo_list_owner_id) 
	    REFERENCES memo_list_owner (memo_list_owner_id)
	    ON DELETE CASCADE ON UPDATE RESTRICT
);

set GLOBAL event_scheduler=ON;

DELIMITER $$
CREATE EVENT event_auto_erase
ON schedule every 1 day
starts '2022-4-30 00:00:00'
DO
BEGIN
    DELETE FROM memo
	WHERE
		EXISTS(
			SELECT * FROM memo_list_owner
			WHERE
				memo_list_owner.is_deleted = 1
				AND memo.memo_list_owner_id = memo_list_owner.memo_list_owner_id
		)
	;

	DELETE FROM memo_list_owner
	WHERE
		memo_list_owner.is_deleted = 1
	;
END$$
DELIMITER ;

CREATE USER 'tester'@'%' identified by 'password' ;
CREATE DATABASE test;
GRANT ALL ON test.* TO 'tester'@'%';
USE test;

CREATE TABLE memo_list_owner(
	memo_list_owner_id INT PRIMARY KEY AUTO_INCREMENT,
	owner_validity_period  DATETIME NOT NULL,
	is_deleted TINYINT(1) DEFAULT 0
);

CREATE TABLE memo(
	memo_id INT PRIMARY KEY AUTO_INCREMENT,
	memo_list_owner_id INT NOT NULL,
	memo_title VARCHAR(50) NOT NULL,
	memo_content VARCHAR(2000) NOT NULL,

    CONSTRAINT fk_memo_list_owner_id_to_memo
	    FOREIGN KEY (memo_list_owner_id) 
	    REFERENCES memo_list_owner (memo_list_owner_id)
	    ON DELETE CASCADE ON UPDATE RESTRICT
);