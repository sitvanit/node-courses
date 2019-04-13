const duplexify = require('duplexify');
const mkdirp = require('mkdirp');
const fs = require('fs');

const log = function (name) {
    const d = duplexify();

    mkdirp('logs', err => {
        const w = fs.createWriteStream(`logs/${name}.log`);
        d.setWritable(w);
    });

    return d;
};

const stream = log();

let n = 0;

const iv = setInterval(() => {
    stream.write(Date.now() + '\n');
    if (n++ ===5) {
        clearInterval(iv);
        stream.end();
    }
}, 100);
