/*** Node.js, accept arguments from the command line ***/

// Arguments can be standalone or have a key and a value.
// node app.js flavio
// node app.js name=flavio

// This changes how you will retrieve this value in the Node.js code.
// The way you retrieve it is using the process object built into Node.js.

// The first argument is the full path of the node command.
// The second element is the full path of the file being executed.
// All the additional arguments are present from the third position going forward.

// You can iterate over all the arguments:
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

// You can get only the additional arguments by creating a new array that excludes the first 2 params:
const args = process.argv.slice(2);

// If you have one argument without an index name, like this:
const args = process.argv.slice(2);
args[0];

// you can parse the env with 'minimist' library
const args = require('minimist')(process.argv.slice(2));
args['name']; //flavio







