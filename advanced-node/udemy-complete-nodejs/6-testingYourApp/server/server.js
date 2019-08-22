const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/error', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo app v1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([
        {
            name: 'Sitvanit Meltzer',
            age: 33
        },
        {
            name: 'Gili Katz',
            age: 33
        }
    ])
});

app.listen(3000);

module.exports.app = app;