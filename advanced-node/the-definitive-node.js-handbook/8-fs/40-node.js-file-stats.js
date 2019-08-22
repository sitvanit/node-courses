/*** Node.js file stats ***/

// Every file comes with a set of details that we can inspect using Node.js.

const fs = require('fs');

fs.stat('/Users/flavio/test.txt', (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }

    stats.isFile(); //true
    stats.isDirectory(); //false
    stats.isSymbolicLink(); //false
    stats.size //1024000 //= 1MB
});

// Node.js provides also a sync method, which blocks the thread until the file stats are ready:
try {
    const stats = fs.stat('/Users/flavio/test.txt')
} catch (err) {
    console.error(err)
}


// The file information is included in the stats variable:
// if the file is a directory or a file, using stats.isFile() and stats.isDirectory()
// if the file is a symbolic link using stats.isSymbolicLink()
// the file size in bytes using stats.size.