/*** Working with folders in Node.js ***/

const fs = require('fs');
const path = require('path');
const fsExtra = require('fs-extra');

/** Check if a folder exists **/
fs.access();


/** Create a new folder **/
// Use fs.mkdir() or fs.mkdirSync() to create a new folder:

const folderName = '/Users/flavio/test';

try {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
    }
} catch (err) {
    console.error(err)
}


/** Read the content of a directory **/
// Use fs.readdir() or fs.readdirSync to read the contents of a directory.
// This piece of code reads the content of a folder, both files and subfolders, and returns their relative path:

const folderPath = '/Users/flavio';
fs.readdirSync(folderPath);

// You can get the full path:
fs.readdirSync(folderPath).map(fileName => {
  return path.join(folderPath, fileName)
};

// You can also filter the results to only return the files, and exclude the folders:
const isFile = fileName => {
  return fs.lstatSync(fileName).isFile()
};

fs.readdirSync(folderPath).map(fileName => {
  return path.join(folderPath, fileName).filter(isFile);
});


/** Rename a folder **/

fs.rename('/Users/flavio', '/Users/roger', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    //done
});

try {
    fs.renameSync('/Users/flavio', '/Users/roger')
} catch (err) {
    console.error(err)
}


/** Remove a folder **/
// Removing a folder that has content can be more complicated than you need. In this case I recommend installing the
// fs-extra module, which is very popular and well maintained, and it’s a drop-in replacement of the fs module,
// providing more features on top of it.

const folder = '/Users/flavio';
fsExtra.remove(folder, err => {
    console.error(err)
});

// It can also be used with promises:
fsExtra.remove(folder).then(() => {
    //done
}).catch(err => {
    console.error(err)
});

// or with async/await:
async function removeFolder(folder) {
  try {
    await fsExtra.remove(folder)
    //done
  } catch (err) {
    console.error(err)
  }
}

const folder = '/Users/flavio';
removeFolder(folder);