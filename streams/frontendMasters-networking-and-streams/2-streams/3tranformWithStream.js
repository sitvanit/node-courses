const { Transform } = require('stream');

const toUpper = new Transform({
    transform: (buffer, encoding, callback) => {
        callback(null, buffer.toString().toUpperCase())
    }
});

process.stdin
    .pipe(toUpper)
    .pipe(process.stdout);
