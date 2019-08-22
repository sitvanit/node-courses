/** require **/

// to execute a require call, node go in this sequence steps:
// 1. resolving - find the absolute file path
// 2. loading - loading the content of the file to memory. determined by the content of the file
// 3. wrapping - gives every module is private scope
// 4. evaluating - what v8 does with the code
// 5. caching - put the module in cache, in order to do the previous steps just one time.

console.log(module); // we can see the paths in which node will search for the required module.

require('something');
// 1. try something.js
// 2. try something.json // useful for static configuration data
// 3. try something.node (binary)

// require is a function that has 5 arguments:
// 1. exports
// 2. require
// 3. module
// 4. __filename
// 5. __dirname