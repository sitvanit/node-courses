/** What are streams? **/

const fs = require('fs');

// readFileSync - the problem with sync is blocking the event loop queue
// const blockOfData = fs.readFileSync('file');
// fs.writeFileSync('file-copy', blockOfData);

// readFile - it's async and that's why the event loop queue is not going to be blocked.

fs.readFile('file', (err, data) => {
    fs.writeFile('file-copy', data, () => {
        console.log('file saved');
    });
});

// if the file size is bigger than your RAM, we still have a problem - here streams comes in the picture.

// stream is an api that read the file in chunks of data.
// streams extend the eventEmitter

fs.createReadStream('file')
    .pipe(fs.createWriteStream('file-copy'));
// it's async and not going to block the event loop queue
// it's going to split the file to chunks and read it.


