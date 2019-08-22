const eventEmitter = require('events').EventEmitter;

class Resource extends eventEmitter {

    constructor(maxEvents) {
        super();

        process.nextTick(function () {
            let count = 0;
            this.emit('start');

            const interval = setInterval(() => {
                this.emit('data', ++count);

                if (count === maxEvents) {
                    this.emit('end', count);
                    clearInterval(interval);
                }
            }, 10)
        }.bind(this));
    }
}

module.exports = Resource;
