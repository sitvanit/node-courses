// node application do not handle cpu intensive tasks well.
// because spending too cpu time in one task will block the event loop.
// one strategy for dealing with it it's child process.

// fork(modulePath, [args], [options]
// a special version of spawn, especially for creating node processes

const fork = require('child_process').fork;

const child = fork(__dirname + '/honorStudent.js');

child.on('message', (msg) => {
    console.log('The answer is: ' + msg.answer);
    child.send({ cmd: 'done' });
});

child.send({ cmd: 'double', number: 20 });
