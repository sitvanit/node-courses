/*** Writing files with Node.js ***/
// All those methods write the full content to the file before returning the control back to your program (in the async version, this means executing the callback)
// In this case, a better option is to write the file content using streams.

const fs = require('fs');

const content = 'Some content!';

fs.writeFile('/Users/flavio/test.txt', content, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    //file written successfully
});

// Alternatively, you can use the synchronous version fs.writeFileSync():
try {
    const data = fs.writeFileSync('/Users/flavio/test.txt', content)
    //file written successfully
} catch (err) {
    console.error(err)
}


// By default, this API will replace the contents of the file if it does already exist.
// You can modify the default by specifying a flag:
fs.writeFile('/Users/flavio/test.txt', content, { flag: 'a+' }, (err) => {});

// The flags you’ll likely use are:
// r+ open the file for reading and writing
// w+ open the file for reading and writing, positioning the stream at the beginning of the file. The file is created if not existing
// a open the file for writing, positioning the stream at the end of the file. The file is created if not existing
// a+ open the file for reading and writing, positioning the stream at the end of the file. The file is created if not existing)


/** Append to a file **/

fs.appendFile('file.log', content, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    //done!
});

