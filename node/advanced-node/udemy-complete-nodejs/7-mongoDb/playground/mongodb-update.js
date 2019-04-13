const { MongoClient, ObjectID } = require('mongodb');

const dbName = 'TodoApp';

MongoClient.connect(`mongodb://localhost:27017/${dbName}`, async (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db(dbName);

    /** findOneAndUpdate return the old item by default **/
    let res = await db.collection('Todos').findOneAndUpdate({
       _id: new ObjectID("5b1be47512893f3e8ae7dd61")
    }, {
       $set: { // without the set it will change all of the object to the one below
           completed: true
       }
    }, {
       returnOriginal: false
    });
    console.log(res);

    res = await db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b1bc4e61af916ccb5f88db8")
    }, {
        $set: {
            name: 'Sitvanit Meltzer'
        },
        $inc: {
            age: 1
        }
    });
    console.log(res);

    client.close(); // close connection
});

// update operators:
// https://docs.mongodb.com/manual/reference/operator/update/