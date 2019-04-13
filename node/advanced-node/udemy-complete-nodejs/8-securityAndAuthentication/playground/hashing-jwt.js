const jwt = require('jsonwebtoken');

const data = {
    id: 4
};

const secert = '123abc';

// takes the object and signs it - create the hash and returns the token value.
// the args is the data object and a secret.
const token = jwt.sign(data, secert);
console.log(token);

// takes the token and the secret and make sure that the data not manipulated.
const decoded = jwt.verify(token, secert);
console.log(decoded);