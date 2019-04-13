const { ObjectId } = require('mongodb');
const { mongoose } = require('../todo-api/server/db/mongoose');
const { Todo, User } = require('../todo-api/server/models');

// remove all of the data from the db
Todo.remove({}).then(result => console.log(result)); // { n: 3, ok: 1 }

// find the first doc and remove it
Todo.findOneAndRemove({ _id: '5b24f8a2bf92d49af52bff82' }).then(todo => console.log(todo));

Todo.findByIdAndRemove('5b24f8a2bf92d49af52bff82').then(todo => console.log(todo));