const { MongoClient, ObjectID } = require('mongodb');

const dbName = 'TodoApp';

MongoClient.connect(`mongodb://localhost:27017/${dbName}`, async (err, client) => {
    let docs, docsCount, docsCursor, sitvanitArray, sitvanitCount;
    
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db(dbName);

    /** find all **/
    try {
        docs = await db.collection('Todos').find().toArray(); // find return a pointer to the documents; toArray returns a promise
        console.log(JSON.stringify(docs, undefined, 2));
    } catch (err) {
        console.log('Unable to fetch todos', err);
    }

    /** find a specific property with promise.then **/
    db.collection('Todos').find({ completed: true }).toArray().then(docs => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, err => {
        console.log('Unable to fetch todos', err);
    });

    /** find ObjectID and count **/
    try {
        docsCount = await db.collection('Todos').find({
            _id: new ObjectID('5b1bc6bd12893f3e8ae7d439') // won't work just with the string becaude the _id is an ObjectID
        }).count(); // find return a pointer to the documents, called a cursor, in order to do something with that: http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html
        console.log(docsCount);
    } catch (err) {
        console.log('Unable to fetch todos', err);
    }

    /** find and count **/
    try {
        docsCursor = db.collection('Users').find({ name: 'Sitvanit Meltzer'});
        sitvanitArray = await docsCursor.toArray();
        sitvanitCount = await docsCursor.count();
        console.log(`array of Sitvanit: ${JSON.stringify(sitvanitArray)}`);
        console.log(`count of Sitvanit ${sitvanitCount}`);
    } catch (err) {
        console.log('Ubable to fetch todos', err);
    }
    
    client.close(); // close connection
});
