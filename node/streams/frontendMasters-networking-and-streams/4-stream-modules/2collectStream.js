/** collect-stream **/

// collect a stream's output into a single buffer.
// for object streams collect output into an array of objects.
// this module is very useful for unit test.

const collect = require('collect-stream');
const split = require('split2');

const sp = process.stdin.pipe(split('.'));

collect(sp, (err, rows) => {
    if (err) console.error(err);
    else console.log(rows);
});
