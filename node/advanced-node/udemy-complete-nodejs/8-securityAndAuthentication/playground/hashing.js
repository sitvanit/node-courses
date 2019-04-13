const { SHA256 } = require('crypto-js');

/** Change the hash without knowing to secret **/
const message = 'I am user number 3';
const hash = SHA256(message).toString(); // hashing is a one way algorithm

console.log('Message: ', message);
console.log('Hash:                                 ', hash);

const data = {
    id: 4
};

const token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
};

console.log('Hash with a secret:                   ', token.hash);

// trying to change the token
token.data.id = 5;
token.hash = SHA256(JSON.stringify(token.data)).toString(); // the person who change the token doesn't know the secret
console.log('Hash after data changed:              ', token.hash);

// check if we can trust the data
const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
console.log('Hash after data changed with a secret:', resultHash);

if (resultHash === token.hash) {
    console.log('Data was not changed');
} else {
    console.log('Data was changed. Do not trust!');
}


