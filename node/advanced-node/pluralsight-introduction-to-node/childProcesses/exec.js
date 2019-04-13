// node application do not handle cpu intensive tasks well.
// because spending too cpu time in one task will block the event loop.
// one strategy for dealing with it it's child process.

// exec(command, [options], callback) -
// runs "command" string in a shell
// callback is invoked on process completion

// execFile(file, [args], [options], callbacl) -
// similar to exec, except "file" is executed directly, rather than in a sub shell.

const exec = require('child_process').exec;

const child = exec('uptime | cut -d "," -f 1', (err, stdout, sterr) => {
    err ? console.log('Error: ' + srderr) : console.log('Output is: ' + stdout);
});

console.log("PID is " + child.pid);