const bcrypt = require('bcryptjs');

const password = '123abc!';

// a salt is random data that is used as an additional input to a one-way function that "hashes" data, as password.
// A new salt is randomly generated for each password. In a typical setting, the salt and the password are concatenated
// and processed with a cryptographic hash function.

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log('Hashed password with salt: ', hash); // $2a$10$/gKio7vpsNlD6MN762y9Su1MAlDLX70./MSH6ZSeHibTeMnZ1TYDG
    }) 
});

const hashedPasswordWithSalt = '$2a$10$/gKio7vpsNlD6MN762y9Su1MAlDLX70./MSH6ZSeHibTeMnZ1TYDG';

bcrypt.compare(password, hashedPasswordWithSalt, (err, res) => {
    console.log(res); // true
});

