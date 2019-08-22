const MAX_TIME = 1000;

// in async function the callback is always the last parameter.
// If input is even, double it
// If input is odd, error
// (call takes random amount of time < 1s)
const evenDoubler = function(v, callback) {
    console.log(`calling evenDoubler for value: ${v}`);
    const waitTime = Math.floor(Math.random() * (MAX_TIME + 1));
    if (v % 2) {
        setTimeout(() => {
            callback(new Error('odd input'));
        }, waitTime);
    } else {
        setTimeout(() => {
            callback(null, v, v * 2, waitTime);
        }, waitTime);
    }
    return v;
};

// a callback function, the is always the first parameter.
const handleResults = function(err, value, results, time) {
    if (err) {
        console.log(`ERROR: ${err.message}`);
    } else {
        console.log(`The results for value ${value} are: "${results}" (${time} ms)`);
    }
};

for(let i = 1; i <= 10; ++i) {
    evenDoubler(i, handleResults);
}


console.log('-----'); // will print first