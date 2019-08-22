const { MongoClient, ObjectID } = require('mongodb');

const dbName = 'TodoApp';

MongoClient.connect(`mongodb://localhost:27017/${dbName}`, async (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db(dbName);

    /** deleteMany **/
    let res = await db.collection('Todos').deleteMany({ text: 'Something to do' });
    console.log(res);

    /** deleteOne - delete the first it met and stops **/
    res = await db.collection('Todos').deleteOne({ text: 'Eat Lunch'});
    console.log(res);

    /** findOneAndDelete - returns the object as 'value' **/
    res = await db.collection('Todos').findOneAndDelete({ completed: false });
    console.log(res);

    /** delete Sitvanit **/
    await db.collection('Users').deleteMany({ name: 'Sitvanit Meltzer'});

    /** delete by id **/
    res = await db.collection('Users').findOneAndDelete({ _id: new ObjectID("5b1bbf3a51237f9948550a22")});
    console.log(res);

    client.close(); // close connection
});
