console.log('Starting app'); // console.log always run synchronously

setTimeout(() => {
    console.log('Inside of callback');
}, 2000); // first argument is a callback function that will invoke after the time mentioned in the second arg.

setTimeout(() => {
    console.log('Second setTimeout invoke');
}, 0);

console.log('Finishing app');

// Starting app
// Finishing app
// Second setTimeout invoke
// Inside of callback
