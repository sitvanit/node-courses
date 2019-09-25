SELECT
	title,
	rating
FROM series
INNER JOIN reviews
	ON series.id = reviews.series_id;

SELECT
	title,
	AVG(rating) AS avg_rating
FROM series
INNER JOIN reviews
	ON series.id = reviews.series_id
GROUP BY series_id
ORDER BY avg_rating;

SELECT
	first_name,
	last_name,
	rating
FROM reviewers
INNER JOIN reviews
	ON reviewers.id = reviews.reviewer;

SELECT
	title AS unreviewed_series
FROM series
LEFT JOIN reviews
	ON series.id = reviews.series_id
WHERE rating IS NULL;

SELECT
	genre,
	ROUND(AVG(rating), 2) AS avg_rating
FROM series
INNER JOIN reviews
	ON series.id = reviews.series_id
GROUP BY genre;

SELECT
	first_name,
	last_name,
	COUNT(rating) 		AS COUNT,
	IFNULL(MIN(rating), 0) AS MIN,
	IFNULL(MAX(rating), 0) AS MAX,
	ROUND(IFNULL(AVG(rating), 0), 2) AS AVG,
	CASE
		WHEN COUNT(rating) = 0 THEN 'INACTIVE'
		ELSE 'ACTIVE'
		END
		AS STATUS
FROM reviewers
LEFT JOIN reviews
	ON reviewers.id = reviews.reviewer_id
GROUP BY reviewers.id;

SELECT
	title,
	rating,
	CONCAT(first_name, ' ', last_name) AS reviewer
FROM reviews
INNER JOIN reviewers
	ON reviewers.id = reviews.reviewer_id
INNER JOIN series
	ON series.id = reviews.series_id
ORDER BY title;
