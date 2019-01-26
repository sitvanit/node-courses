/** Event Loop **/
// every asynchronous execution in node, is executed in the event loop queue.
// node is a single threaded, so it's can be risky, because we can block the queue

// we can try it and write in the console
setTimeout(() => {
   while(true) {};
}, 5);

// that function won't allow us to do nothing else in that console.
