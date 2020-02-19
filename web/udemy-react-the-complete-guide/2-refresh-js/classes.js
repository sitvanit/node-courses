// Classes are blueprint of objects.
// We use classes in React to create components

class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Classes extends Human {
    // es6
    constructor() {
        super();
        this.name = 'Max'; // property - like a variable attaches to classes/objects
    }

    // method - like a function attaches to classes/objects
    printMyName() {
        console.log(this.name);
    }

    // es7 -  we can define class properties directly inside the class and skip the constructor function - behind the scene it will still use constructor function.
    lastName = 'Field';
    printLastName = () => console.log(this.lastName);
}

// A class is instanciated with the new keyword
const myPerson = new Classes();
myPerson.printMyName();
myPerson.printGender();
myPerson.printLastName();
// Class let us use inheritance, Person extends Master
