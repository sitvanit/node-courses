/** event emitter **/
// many of node core modules inherit from the eventEmitter.
// emitting an event is a signal that some occasion has been occurred. a change in the state of the emitting object.
// not as callbacks, eventEmitters can react to each event different, it depends on the listener.

const EventEmitter = require('events');

class WithLog extends EventEmitter {
    execute(taskFunc) {
        console.log('before executing');
        this.emit('begin');
        taskFunc();
        this.emit('end');
        console.log('after executing');
    }
}

const withLog = new WithLog();

withLog.on('begin', () => console.log('about to execute'));
withLog.on('end', () => console.log('done with execute'));

console.log('1');
withLog.execute(() => console.log('*** executing task ***'));

// it's all happened synchronously:
// before executing
// about to execute
// *** executing task ***
// done with execute
// after executing

// just like callbacks, events don't mean sync or async code.

console.log('2');
withLog.execute(() => setTimeout(() => {
    console.log('*** executing task ***');
}, 500));

// before executing
// about to execute
// done with execute
// after executing
// *** executing task *** => this line is async now

class WithTime extends EventEmitter {
    execute(asyncFunc) {
        console.time('execute');
        this.emit('begin');
        asyncFunc();
        console.timeEnd('execute');
        this.emit('end');
    }
}

const withTime = new WithTime();

withTime.on('begin', () => console.log('about to execute'));
withTime.on('end', () => console.log('done with execute'));

console.log('3');
withTime.execute(() => setTimeout(() => {
    console.log('*** executing task ***');
}, 500));

// about to execute
// execute: 0.224ms
// done with execute
// *** executing task ***


// if we don't listen to an 'error' event, if it will be thrown, the node app will be exit with code 1.
// we van also listen to process.on('uncaughtException');

process.on('uncaughtException', (err) => {
    console.log(err);
    process.exit(1); // exit anyway
});