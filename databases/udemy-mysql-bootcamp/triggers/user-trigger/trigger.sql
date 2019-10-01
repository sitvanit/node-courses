-- source trigger.sql

-- In general sql script the delimeter is ; we want everything in the trigger will run together so we change the delimiter temporarily.
DELIMITER $$

CREATE TRIGGER must_be_adult
  BEFORE INSERT ON users FOR EACH ROW
  -- Inside the BEGIN-END is the code that will run everytime before insert a user
  BEGIN
    -- NEW is a placeholder that reffering to the new user
    IF NEW.age < 18
    THEN
      -- MySQL error is divided to 3 parts: (1) numeric code; (2) five chars value for SQLSTATE the values are taken from ANSI SQL and ODBC; (3) string message
      -- 45000 defined a generic state representing "unhandled user-defined exception"
      SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Must be an adult';
    END IF;
  END
$$

DELIMITER ;
