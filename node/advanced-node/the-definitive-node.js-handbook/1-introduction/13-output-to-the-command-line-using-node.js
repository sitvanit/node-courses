/*** Output to the command line using Node.js ***/


/** clear **/
console.clear();


/** formats **/
console.log('My %s has %d years', 'cat', 2); // My cat has 2 years
// %s format a variable as a string
// %d or %i format a variable as an integer
// %f format a variable as a floating point number
// %O used to print an object representation


/** count **/
// What happens is that count will count the number of times a string is printed, and print the count next to it.
const x = 1;
const y = 2;
const z = 3;
console.count(
    'The value of x is ' + x + ' and has been checked .. how many times?'
);
console.count(
    'The value of x is ' + x + ' and has been checked .. how many times?'
);
console.count(
    'The value of y is ' + y + ' and has been checked .. how many times?'
);


/** stack trace **/
// print the call stack trace of a function
const function2 = () => console.trace();
const function1 = () => function2();
function1();


/** calculate the time spent **/
const doSomething = () => console.log('test');

const measureDoingSomething = () => {
    console.time('doSomething()');
    //do something, and measure the time it takes
    doSomething();
    console.timeEnd('doSomething()');
};

measureDoingSomething();


/** stdout and stderr **/
// console.log printing messages in the console. this is what's called the stdout (standard output).
// console.error prints to the stderr stream. It will not appear in the console, but it will appear in the error log.


/** color the output **/
// the low-level way to do this
console.log('\x1b[33m%s\x1b[0m', 'hi!');
// The simplest way to do this
const chalk = require('chalk');
console.log(chalk.yellow('hi!'));


/** Create a progress bar **/
// This snippet creates a 10-step progress bar, and every 100 ms one step is completed.
const ProgressBar = require('progress');
const bar = new ProgressBar(':bar', { total: 10 });
const timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
        clearInterval(timer)
    }
}, 100);
