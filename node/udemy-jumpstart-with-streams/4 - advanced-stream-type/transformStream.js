// Transform streams are streams which read input, process the data manipulating it, and then outputing new data. (e.g. txt to zip)
const { Transform } = require('stream');

class ConvertToLoweCase extends Transform {
    _transform (chunk, encoding, callback) {
        const transformed = chunk.toString().toLowerCase();
        this.push(transformed);

        callback();
    }
}

const lowerCaseTransform = new ConvertToLoweCase();

process.stdin
    .pipe(lowerCaseTransform)
    .pipe(process.stdout);

