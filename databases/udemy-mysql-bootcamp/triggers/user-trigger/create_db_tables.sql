-- mysql -u root -p
-- the password is 'password'
-- source create_db_tables.sql;
DROP DATABASE trigger_demo;
CREATE DATABASE trigger_demo;
USE trigger_demo;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

CREATE TABLE users(
    username VARCHAR(100) PRIMARY KEY,
    age INT
);

INSERT INTO users(username, age) VALUES ('bobby', 23);
INSERT INTO users(username, age) VALUES ('sally', 16);
