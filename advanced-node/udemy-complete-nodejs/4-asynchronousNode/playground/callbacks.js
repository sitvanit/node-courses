// callback function
// is define as a function that can pass as an arg to another function and to execute after something happens.

const getUser = (id, callback) => {
    const user = {
        id,
        name: 'Sitvanit'
    };

    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(31, (userData) => {
    console.log(userData);
});

console.log('End Program');

// End Program
// { id: 31, name: 'Sitvanit' }