/*** Node.js File Paths ***/
// Every file in the system has a path.

// On Linux and macOS, a path might look like:
// /users/flavio/file.txt
// While Windows computers are different, and have a structure such as:
// C:\users\flavio\file.txt
// You need to pay attention when using paths in your applications, as this difference must be taken into account.

const path = require('path');

const notes = '/users/flavio/notes.txt';

path.dirname(notes);  // /users/flavio
path.basename(notes); // notes.txt
path.extname(notes);  // .txt

path.basename(notes, path.extname(notes)); //notes


/** path.join() **/
const name = 'flavio';
path.join('/', 'users', name, 'notes.txt'); //'/users/flavio/notes.txt';


/** path.resolve() **/
path.resolve('flavio.txt'); //'/Users/flavio/flavio.txt' if run from my home folder
// In this case Node.js will simply append /flavio.txt to the current working directory.

// If you specify a second parameter folder, resolve will use the first as a base for the second:
path.resolve('tmp', 'flavio.txt'); // '/Users/flavio/tmp/flavio.txt' if run from my home folder

// If the first parameter starts with a slash, that means it’s an absolute path:
path.resolve('/etc', 'flavio.txt'); // '/etc/flavio.txt'


/** path.normalize() **/
// path.normalize() is another useful function, that will try and calculate the actual path, when it contains relative
// specifiers like . or .., or double slashes:

path.normalize('/users/flavio/..//test.txt'); // /users/test.txt


// But resolve and normalize will not check if the path exists. They just calculate a path based on the information they got.
