--cross join
SELECT * FROM customers, orders;

--implicit inner join
SELECT first_name, last_name, order_date, amount FROM customers, orders
WHERE customers.id = orders.customer_id;

--explicit inner join
SELECT first_name, last_name, order_date, amount FROM customers
INNER JOIN orders
	ON customers.id = orders.customer_id;

--left join
SELECT first_name, last_name, order_date, amount FROM customers
LEFT JOIN orders
	ON customers.id = orders.customer_id;

--right join
SELECT first_name, last_name, order_date, amount FROM customers
RIGHT JOIN orders
	ON customers.id = orders.customer_id;
