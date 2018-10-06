const EventEmitter = require('pluralsight-introduction-to-node/events/events1').EventEmitter;

const getResource = function(countTo) {
    const eventEmitter = new EventEmitter();

    // nextTick - on the next tick of the eventloop run this function
    process.nextTick(function() {
        let count = 0;

        eventEmitter.emit('start');

        // every 10 ms run the function inside
        const interval = setInterval(function () {
            eventEmitter.emit('data', ++count);

            if (count === countTo) {
                eventEmitter.emit('end', count);
                clearInterval(interval); // stops the interval
            }
        }, 10);
    });
    return eventEmitter;
};

const resource = getResource(5);

resource.on('start', () => {
    console.log(`I've started!`);
});

resource.on('data', (data) => {
    console.log(`I recieived data ${data}`);
});

resource.on('end', (interval) => {
    console.log(`I'm done, with ${interval} data events.`);
});
