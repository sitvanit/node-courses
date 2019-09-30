// The worker is going to watch redis anytime we get a new index insert into redis, the worker automatically pull the value out and calculate the fib and insert it back to redis
const redis = require('redis');
const keys = require('./keys');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000 // if there is any problem with the redis server - retry reconnect to redis server every 1000 ms (1 sec)
});
// we'll always make duplicates for redis subscriber/publisher in order to not block redis from doing other operations.
const redisSubscriber = redisClient.duplicate();

// recursive solution is very slow - but this is why we save the values in redis and have a separate worker for the calculations
function fib(index) {
    if (index < 2) return 1;
    return fib(index - 1) + fib(index - 2);
}

redisSubscriber.on('message', (channel, message) => {
    // anytime we get a message (an index to calculate) we'll add it to hash set that called values, the index will be the message and the value is the calculated value
    redisClient.hset('values', message, fib(parseInt(message)))
});
redisSubscriber.subscribe('insert');
