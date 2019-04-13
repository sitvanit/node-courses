const through = require('through2');
let size = 0;

process.stdin
    .pipe(through.obj(write1))
    .pipe(through.obj(write2, end));

function write1 (buf, enc, next) {
    next(null, { length: buf.length })
}

function write2 (buf, enc, next) {
    size += buf.length;
    next();
}

// ctrl d end the process
function end () {
    console.log('size=', size);
}

