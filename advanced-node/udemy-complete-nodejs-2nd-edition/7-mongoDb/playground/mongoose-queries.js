const { ObjectId } = require('mongodb');
const { mongoose } = require('../todo-api/server/db/mongoose');
const { Todo, User } = require('../todo-api/server/models');

const todoId = "5b24f8a2bf92d49af52bff82";
const userId = "5b1d39e3d1faf89a060398bf";

if (!ObjectId.isValid(todoId)) {
    return console.log('ID not valid');
}

// returns an array - if found nothing then []
Todo.find({
    _id: todoId // mongoose will take the string and convert it to object id
}).then(todos => console.log(todos));

// returns the first found object - if found nothing then null
Todo.findOne({
    _id: todoId // mongoose will take the string and convert it to object id
}).then(todos => console.log(todos));

// if found nothing then null
Todo.findById(todoId).then(todo => {
    if(!todo) {
        return console.log('Id not found');
    }
    console.log(todo)
}).catch(e => console.log(e));

// if found nothing then null
User.findById(userId).then(user => {
    if(!user) {
        return console.log('Id not found');
    }
    console.log(user)
}).catch(e => console.log(e));