const Resource = require('./resource');

const resource = new Resource(5);

resource.on('start', () => {
    console.log(`I've started!`);
});

resource.on('data', (data) => {
    console.log(`I recieived data ${data}`);
});

resource.on('end', (interval) => {
    console.log(`I'm done, with ${interval} data events.`);
});