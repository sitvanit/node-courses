/** Event Emitters **/
// event emitters are just an api that allows us to listen and emit events.

const events = require('events').EventEmitter;
const emitter = new events.EventEmitter();

emitter.on('nodejsPost', data => {
    console.log(data);
});

emitter.emit('nodejsPost', 'here is news about node js');


