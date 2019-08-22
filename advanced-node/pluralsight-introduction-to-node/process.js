// process object has 3 streams:
// process.stdin - readable
// process.stdout - writable
// process.stderr - writable
// the process is an instance of the EventEmitter

// stdin stream starts pause, so we must call resume
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => {
    process.stdout.write(`Data! -> ${chunk}`);
});

// ctrl + d
process.stdin.on('end', () => {
    process.stderr.write('End!\n');
});

process.on('SIGTERM', () => {
    process.stderr.write('Terminated!');
});

// kill -TERM <pid> - the process will continue
console.log(`PID: ${process.pid}`);