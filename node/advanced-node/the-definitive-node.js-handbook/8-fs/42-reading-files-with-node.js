/** Reading files with Node.js **/
// Both fs.readFile() and fs.readFileSync() read the full content of the file in memory before returning the data.
// This means that big files are going to have a major impact on your memory consumption and speed of execution of the program.
// In this case, a better option is to read the file content using streams.

const fs = require('fs');

fs.readFile('/Users/flavio/test.txt', (err, data) => {
    if (err) {
        console.error(err);
        return
    }
    console.log(data)
});

// Alternatively, you can use the synchronous version:
try {
    const data = fs.readFileSync('/Users/flavio/test.txt');
    console.log(data)
} catch (err) {
    console.error(err)
}
