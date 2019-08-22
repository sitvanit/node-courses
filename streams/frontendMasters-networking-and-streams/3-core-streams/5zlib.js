// zip a file from the command line: 'gzip -<hello.txt > hello.txt.gz' to verify it worked 'gunzip < hello.txt.gz'

const { createGunzip } = require('zlib');
const { createHash } = require('crypto');

// a script to unzip a file from the command line
process.stdin
    .pipe(createGunzip())
    .pipe(createHash('sha512', { encoding: 'hex' }))
    .pipe(process.stdout);

// to run it: 'node 5zlib.js < hello.txt.gz'
