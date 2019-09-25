const { MongoClient, ObjectID } = require('mongodb');

const dbName = 'TodoApp';
const obj = new ObjectID();
console.log(obj);

// we don't need to create a db in order to use it, it's enough to write it in the url
MongoClient.connect(`mongodb://localhost:27017/${dbName}`, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db(dbName);
    
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, res) => {
        if(err) {
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(res.ops, undefined, 2)); // ops are all of the documents that inserted; undefined for the filter; 2 the indentation (tab)
    });

    // [
    //     {
    //         "text": "Something to do",
    //         "completed": false,
    //         "_id": "5b1bbddcb501568cd4f80d11"
    //     }
    // ]
    // the _id is different than in sql db, because it's not incremented.
    // the first 4 bytes are timestamp - that's why we don't need a createdAt field.
    // the next 3 bytes are the machine identifier
    // the next 2 bytes are the process identifier
    // the next 3 bytes are a counter - a random value.
    // we can send the id explicitly.

    db.collection('Users').insertOne({
        // _id: 123,
        name: 'Sitvanit Meltzer',
        age: 33,
        location: 'Israel'
    }, (err, res) => {
        if(err) {
            return console.log('Unable to insert user', err);
        }
        console.log(JSON.stringify(res.ops, undefined, 2));
        console.log(res.ops[0]._id);
        console.log(res.ops[0]._id.getTimestamp());
    });

    client.close(); // close connection
});