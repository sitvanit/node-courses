const db = require('./db');

module.exports.handleSignup = (email, password) => {
    // check if the email already exists
    // save user to db
    db.saveUser({email, password})
    // send the welcome email
};