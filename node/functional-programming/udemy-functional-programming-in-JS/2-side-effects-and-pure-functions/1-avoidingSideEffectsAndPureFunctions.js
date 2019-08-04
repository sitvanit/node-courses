/* 1 */
let x = 1;

fun1();
console.log(x);
fun2();
console.log(x);
fun3();
console.log(x);

// How sure can you be of the value that will printed to the console?
// You can be absolutely sure, unless you know that those function do not cause side effects.
// so we should go to those functions and check it before we could be certain what those log statements are going to be.


/* 2 */
let num = 0;

const increment = function () {
    return ++num;
};

// increment function has side effects, because i is changing inside the function.
// and it may cause some problems if i is used in other functions.

// a side effect is an observable change outside the function.
// it creates disadvantages, it makes code difficult to predict, and it makes code harder to debug.

// How can we write that function without sideEffects?

const incrementNoSideEffects = function(num) {
    return num + 1;
};

// this is called a pure function, because it does not have side effects.

/** side effects **/
// 1. Changing a value globally (variable, property or data structure)
// 2. Changing the original value of a functions arguments
// 3. Throwing an exception
// 4. Printing to the screen or logging
// 5. Triggering an external process
// 6. Invoking other functions that have side effects.

// knowing those things, how can you write a code without side effects?
// You can't.
// The goal of functional programming is just to manage it better. to avoid side effects.
// By managing side effects with pure functions the code is becoming more predictable and it's easier to test and debug.

/** pure functions **/
// 1. The function depends on the input provided and not on external data that may be changed
// 2. The function doesn't cause side effects. It doesn't cause change beyond its scope
// 3. Given the same input, the function will always return the same output.

