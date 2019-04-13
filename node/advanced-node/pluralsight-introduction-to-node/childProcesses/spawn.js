// node application do not handle cpu intensive tasks well.
// because spending too cpu time in one task will block the event loop.
// one strategy for dealing with it it's child process.

// spawn(command, [args], [options]) -
// returns a ChildProcess object that is:
// an EventEmitter and emits "exit" and "close" events.
// has streams for stdin, stdout, stderr

const spawn = require('child_process').spawn;
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['node']);

ps.stdout.pipe(grep.stdin);
grep.stdout.pipe(process.stdout);

ps.stderr.on('data', (data) => {
    console.log('ps srderr: ' + data);
});

grep.stderr.on('data', (data) => {
    console.log('grep stderr: ' + data);
});

