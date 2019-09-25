-- mysql -u root -p
-- the password is 'password'
-- source create_db_tables.sql;
DROP DATABASE join_us;
CREATE DATABASE join_us;
USE join_us;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

CREATE TABLE users(
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);
