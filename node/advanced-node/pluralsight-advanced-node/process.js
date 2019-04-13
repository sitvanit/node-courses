/** process **/
// available in the global object
// the node process object provides a bridge between the node application and its running environment.

// a list of the versions of the current node and its dependencies
// node -p "process.versions"

// the env properties
// node -p "process.env" | less

// process is an event emitter
process.on('exit', (code) => {
    // do one final synchronous operation before the node process terminates (can't use the event loop here).
});

process.on('uncaughtException', (err) => {
    // by default node prints the stack trace.
    // do any cleanup and exit anyway.
    console.error(err);
    // we have to exit explicitly.
    process.exit(1);
});

process.stdin.resume(); // keep the event loop busy

console.dog();