const split = require('split2');
const through = require('through2');

let lineCount = 0;
process.stdin
    .pipe(split())
    .pipe(through(write, end));

function write (buf, enc, next) {
    lineCount++;
    next()
}

function end (next) {
    console.log(lineCount);
    next();
}

// 'echo 'one\ntwo\nthree' | node 10split.js' - will split the streams by new lines.
// split removes the delimiter
// you can give split a custom delimiter or regex - the default is new line \n
