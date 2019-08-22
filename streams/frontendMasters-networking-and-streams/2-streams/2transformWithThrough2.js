const fs = require('fs');
const through = require('through2');

// read the data from a file - the file name is from the cli - node 2transformWithThrough2.js file.txt
fs.createReadStream(process.argv[2])
    .pipe(toUpper())
    .pipe(process.stdout);

function toUpper() {
    return through((buffer, encoding, callback) => callback(null, buffer.toString().toUpperCase()));
    // or
    // this.push(buf.toString.toUpperCase());
    // callback();
}

// we can also read the data from the terminal
process.stdin
    .pipe(toUpper())
    .pipe(process.stdout);
