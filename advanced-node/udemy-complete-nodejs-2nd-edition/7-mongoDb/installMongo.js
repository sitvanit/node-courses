// download mongo, and move the mongo dir to the user dir.
// create in the user dir mongo-data dir - for the data.
// in the mongo/lib there are bunch of executables that we can run.
// mongod - start up the db server
// mongo - let us connect to the server and run some commands

// to start up:
// cd ~/mongo/bin
// ./mongod --dbpath ~/mongo-data

// in another shell:
// cd ~/mongo/bin
// ./mongo

// to insert a record to the DB:
// db.Todos.insert({text: 'go running tomorrow morning'}) => WriteResult({ "nInserted" : 1 })

// select all the records:
// db.Todos.find() => { "_id" : ObjectId("5b1b9197dd5761bed9ce2a11"), "text" : "go running tomorrow morning" }

// GUI for mongo - robo.
// add a connection at first (just change the name, the port is already right)


