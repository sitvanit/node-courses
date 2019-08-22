/** Working with file descriptors in Node.js **/

// Before you’re able to interact with a file that sits in your file system, you must get a file descriptor.
// A file descriptor is what’s returned by opening the file using the open() method offered by the fs module:

const fs = require('fs');

fs.open('/Users/flavio/test.txt', 'r', (err, fd) => {
    // r we used as the second parameter to the fs.open() call.
    // fd is our file descriptor
});

// Other flags you’ll commonly use are
// r+ open the file for reading and writing
// w+ open the file for reading and writing, positioning the stream at the beginning of the file. The file is created if not existing.
// a open the file for writing, positioning the stream at the end of the file. The file is created if not existing.
// a+ open the file for reading and writing, positioning the stream at the end of the file. The file is created if not existing.

// You can also open the file by using the fs.openSync method, which instead of providing the file descriptor object in
// a callback, it returns it:
try {
  const fd = fs.openSync('/Users/flavio/test.txt', 'r')
} catch (err) {
  console.error(err)
}