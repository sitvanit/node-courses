const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true })); // add the body as a property on the request
app.use(express.static(__dirname + '/public')); // connect the css to the views

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'join_us'
});

app.get('/', (req, res) => {
    const query = 'SELECT COUNT(*) AS count FROM users';
    connection.query(query, (err, results) => {
        if (err) throw err;
        const { count } = results[0];
        res.render('home', { count }); // instead of res.send - look for a view in directory
    });
});

app.post('/register', (req, res) => {
    const { email } = req.body;
    const person = { email };
    const query = 'INSERT INTO users SET ?';

    connection.query(query, person, (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
