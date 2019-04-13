// we can only pass 1 argument to resolve/reject. if we'd like to pass more, we should use an object.
// we can only reject or resolve 1 time, that's differ than callback that we can call callback how many times that we'd like to.
// that's better, because it protect us from bugs.
// promise that done called 'settled'
const somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Hey, it worked');
        reject('Unable to fulfill promise');
    }, 2500);
});

// then will call only if the promise fulfilled
// the first arg of then is callback if succeed (resolve)
// the second arg of then is callback if fail (reject)
somePromise.then((message) => {
    console.log('Success: ', message);
}, (errorMessage) => {
    console.log('Error: ', errorMessage);
});
