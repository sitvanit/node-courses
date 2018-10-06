/** i/o **/
// i/o is used to label a communication between a process in the computer cpu and anything external to that cpu,
// including memory, disk, network and even another process.
// process communicates with this external things with signals or messages.
// in node the term io is used to reference accessing network and disk.

// handling slow i/o:
// 1. synchronous (slow)
// 2. fork() (not good if there are a lot of i/o)
// 3. threads (complicated)
// 4. event loop

/** event loop **/
// event loop - the entity that handles external events and converts them into callback invocations.
// a loop that picks events from the event queue and pushes their callbacks to the call stack.

// set timeout will get to the event queue, and will execute at the next tick of the event loop, from the stack just
// when it will be empty again.
setTimeout(() => {
    console.log('timeout');
}, 0); // will execute in minimum of 0 ms (can be more)

setImmediate(() => {
    console.log('immediate');
}); // will execute in 0 ms timer

process.nextTick(() => {
    console.log('next tick');
}); // will execute immediately after the current operation.

// the order of the log:
// next tick
// timeout
// immediate
