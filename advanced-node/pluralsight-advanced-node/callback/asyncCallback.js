const fs = require('fs');

/** callback **/
const readFileAsArray1 = (file, cb) => {
    fs.readFile(file, (err, data) => {
        if (err) return cb(err);
        const lines = data.toString().trim().split('\n');
        cb(null, lines);
    });
};

// when the path is relative node will look for the file from the dir that it runs, not the dir of this file.
readFileAsArray1('./numbers', (err, lines) => {
    if (err) throw err;

    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(number => number % 2 === 1);
    console.log('odd numbers count: ', oddNumbers.length);
});


/** promise **/
const readFileAsArray2 = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) return reject(err);
            const lines = data.toString().trim().split('\n');
            resolve(lines);
        });
    })
};

readFileAsArray2('./numbers')
    .then(lines => {
    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(number => number % 2 === 1);
    console.log('odd numbers count: ', oddNumbers.length);
}).catch(err => console.log(err));


/** async await **/
 async function countOdd() {
     try {
         const lines = await readFileAsArray2('./numbers');
         const numbers = lines.map(Number);
         const oddNumbers = numbers.filter(number => number % 2 === 1);
         console.log('odd numbers count: ', oddNumbers.length);
     } catch (err) {
         console.log(err);
     }
}

countOdd();