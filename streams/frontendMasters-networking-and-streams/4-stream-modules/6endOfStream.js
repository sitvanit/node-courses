/** end of stream **/

// reliability detect when a stream is finished.

const onEnd = require('end-of-stream');
const net = require('net');

net.createServer(stream => {
    const iv = setInterval(() => {
        stream.write(Date.now() + '\n');
    }, 1000);

    onEnd(stream, () => {
        clearInterval(iv);
    })
}).listen(5000);
