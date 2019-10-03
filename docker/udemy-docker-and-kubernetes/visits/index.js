const express = require('express');
const redis = require('redis'); // redis client
const process = require('process');

const app = express();
const port = 8081;

const client = redis.createClient({
    host: 'redis-server', // the name of the service (container) in docker-compose
});

client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send(`Number of visits is ${visits}`);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
