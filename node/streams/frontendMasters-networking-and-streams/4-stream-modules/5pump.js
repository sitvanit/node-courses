const pump = require('pump');
const pumpify = require('pumpify');

// if any of the pipes has an error, stream is also an eventEmitter, and if an evenEmitter emits an error an no one is
// listening to that, then node will crush.

// pump pipe all the streams together, but in a way it handles errors.

pump(stream1, stream2, stream3, function (err) { console.log(err);});

const stream = pumpify(stream1, stream2, stream3);
