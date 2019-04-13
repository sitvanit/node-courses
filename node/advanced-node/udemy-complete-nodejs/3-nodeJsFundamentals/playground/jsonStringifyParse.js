const obj = {
    name: 'Sitvanit'
};

const stringObj = JSON.stringify(obj);
console.log(obj);               // { name: 'Sitvanit' }
console.log(stringObj);         // {"name":"Sitvanit"}
console.log(typeof stringObj);  // string

const personString = '{"name": "Sitvanit", "age": 33}';
const person = JSON.parse(personString);
console.log(personString);
console.log(person);
console.log(typeof person);
