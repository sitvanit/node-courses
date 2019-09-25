const faker = require('faker');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'join_us'
});

// const q = 'SELECT COUNT(*) AS total FROM users';
//
// connection.query(q, (error, results, fields) => {
//     if (error) throw error;
//     console.log(results[0].total);
// });

const persons = [];
for (let i = 0; i < 500; i++) {
    persons.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}

const q = 'INSERT INTO users (email, created_at) VALUES ?';

connection.query(q, [persons], (error, results) => {
    if (error) throw error;
    console.log(results);
});

connection.end();
