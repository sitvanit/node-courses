// Spread & Rest Operators is the ...
// It's spread or rest according the context

// Spread - used to split up array element or object properties
// const newArray = [...oldArray, 1, 2];
// const newObject = { ...oldObject, newProp: 5 };

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person = {
    name: 'Max'
};

const newPerson = {
    ...person,
    age: 28
};

console.log(newPerson);

// Rest - used to merge a list of function arguments into an array
// function sortArgs(...args) {
//     return args.sort();
// }

const filter = (...args) => args.filter(el => el === 1);

console.log(filter(1, 2, 3));

