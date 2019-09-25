console.log('Starting app.js');

// we can find all the built in libraries here: https://nodejs.org/api/index.html

// use require to load in files (to be reusable)
const fs = require('fs'); // require - fetch all pf the data from the fs, and store it in fs var.
const os = require('os');
const _ = require('lodash');
const notes = require('./notesDraft');

const user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age} years old!\n`, (err) => {
    if (err) {
        console.log('Unable to write to file');
    }
});

// or just synchronize:
// fs.appendFileSync('greetings.txt', 'Hello World!');

// if we call the app.js again, it will add 'hello world!' one more time to the file.

const res = notes.addNote();
console.log(res);

const sum = notes.add(3432, 5);
console.log(sum);

// npm init will create package.json file.
// npm i --save - the save will update the package.json

console.log(_.isString(true));
console.log(_.isString('true'));

const filteredArray = _.uniq(['Sitvanit', 1, 'Mike', 'Sitvanit', 1, 2, 3]);
console.log(filteredArray);

/** nodemon **/
// install from cli:
// npm i nodemon -g
// when we would like to run an app with nodemon:
// nodemon app (instead of node app)