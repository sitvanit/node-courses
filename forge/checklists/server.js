const express = require('express');
const axios = require('axios');
const querystring = require('querystring');
const bodyParser = require('body-parser');    // Receive JSON format

const app = express();
app.use(bodyParser.json());

app.set('port', 3000);

const server = app.listen(app.get('port'), function () {
    console.log('Server listening on port ' + server.address().port);
});

const scopes = 'data:read data:write account:read account:write';
let access_token = '';

app.post('/api/forge/oauth', function (req, res) {
    axios({
        method: 'POST',
        url: 'https://developer.api.autodesk.com/authentication/v1/authenticate',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        },
        data: querystring.stringify({
            client_id: req.body.client_id,
            client_secret: req.body.client_secret,
            grant_type: 'client_credentials',
            scope: scopes
        })
    })
        .then(function (response) {
            // Success
            access_token = response.data.access_token;
            res.send('authentication succeeded');
        })
        .catch(function (error) {
            // Failed
            console.log(error);
            res.send('Failed to authenticate');
        });
});

app.post('/api/forge/projects', (req, res) => {
    axios({
        method: 'POST',
        url: 'https://developer.api.autodesk.com/hq/v1/accounts/c287c3bf-f408-4556-898e-217e495a7f0a/projects',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + access_token
        },
        body: req.body
,    })
        .then((response) => {
            res.send(response);
        })
        .catch(function (error) {
            // Failed
            console.log(error);
            res.send('Failed to post project');
        });
});
