const request = require('../http/request');
const fs = require('fs');
const zlib = require('zlib');

const stream = request('http://www.pluralsight.com/'); // returns readable stream

stream.pipe(process.stdout); // stdout = console, so it will print it in the console.

stream.pipe(fs.createWriteStream('writeTo.html')); // write to a file

stream.pipe(zlib.createGzip()).pipe(fs.createWriteStream('writeTo.html.gz'));
