const square = x => x * x;

console.log(square(9)); // 81

const user = {
    name: 'Sitvanit',
    sayHi: () => {
        console.log(arguments); // the global arguments variable
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHello () {
        console.log(arguments); // { '0': 1, '1': 2, '2': 3 }
        console.log(`Hello. I'm ${this.name}`);
    }
};

// arrow function don't bind to 'this' keyword
// the 'this' refers to the parent binding, and in that case there is no parent function, so this will refer to the global 'this' keyword.
user.sayHi(1, 2, 3); // Hi. I'm undefined
user.sayHello(1, 2, 3); // Hello. I'm Sitvanit

// in general, if you don't need the 'this' or the 'arguments' you can use arrow functions without problem.


