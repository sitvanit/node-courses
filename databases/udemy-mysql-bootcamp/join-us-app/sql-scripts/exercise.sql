SELECT
    DATE_FORMAT(created_at, '%M %D %Y') AS earliest_date
FROM users
ORDER BY created_at
LIMIT 1;

SELECT *
FROM users
WHERE created_at = (SELECT MIN(created_at) FROM users);

SELECT
    MONTHNAME(created_at) AS month,
    COUNT(*) AS count
FROM users
GROUP BY month
ORDER BY count DESC;

SELECT
    COUNT(email) AS yahoo_users
FROM users
WHERE email LIKE '%yahoo.com';

SELECT
    CASE
    WHEN email LIKE '%gmail.com' THEN 'gmail'
    WHEN email LIKE '%yahoo.com' THEN 'yahoo'
    WHEN email LIKE '%hotmail.com' THEN 'hotmail'
    ELSE 'other'
    END
    AS provider,
    COUNT(*) as total_users
FROM users
GROUP BY provider
ORDER BY total_users DESC;


