// when we set one var to be another primitive var - it's by value, it copies it.
let number = 1; // primitive types
const num2 = number; // now num2 is a copy of number, and not a reference, because number is a primitive.
number = 4;
console.log(num2); // 1;

// objects and arrays are reference types though
// when we set one var to be another object/array - it's by reference, it sets a pointer to that object/array.
const person = {
    name: 'Max'
};

// by reference
const secondPerson = person;

// in order to copy it by value we can use the spread operator
const thirdPerson = { ...person };

person.lastName = 'Field';

console.log(secondPerson); // { name: 'Max', lastName: 'Field' }
console.log(thirdPerson); // { name: 'Max' }

