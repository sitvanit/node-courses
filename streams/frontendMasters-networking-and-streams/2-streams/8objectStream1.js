/** Object Stream **/

// Normally you can only read and write buffers and strings with streams.
// However, if you initialize a stream in 'objectMode', you can use any kind of object (except of null).

const through = require('through2');

const tr = through.obj((row, enc, next) => {
    next(null, row.n * 1000 + '\n')
});

tr.pipe(process.stdout);

tr.write({ n: 5 });
tr.write({ n: 10 });
tr.write({ n: 3 });

tr.end()
