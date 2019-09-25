SELECT first_name, title, grade
FROM students
INNER JOIN papers
	ON students.id = papers.student_id
ORDER BY grade DESC;

SELECT first_name, title, grade
FROM students
LEFT JOIN papers
	ON students.id = papers.student_id;

SELECT
	first_name,
	IFNULL(title, 'MISSING') AS 'title',
	IFNULL(grade, 0) AS 'grade'
FROM students
LEFT JOIN papers
	ON students.id = papers.student_id;

SELECT
	first_name,
	IFNULL(AVG(grade), '0') AS 'average'
FROM students
LEFT JOIN papers
	ON students.id = papers.student_id
GROUP BY students.id
ORDER BY average DESC;

SELECT
	first_name,
	IFNULL(AVG(grade), '0') AS 'average',
	CASE
	WHEN AVG(grade) IS NULL THEN 'FAILING'
	WHEN AVG(grade) >= 75 THEN 'PASSING'
	ELSE 'FAILING'
	END AS 'passing_status'
FROM students
LEFT JOIN papers
ON students.id = papers.student_id
GROUP BY students.id
ORDER BY average DESC;
