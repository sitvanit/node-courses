/** Exercise **/
let currentUser = 0;
const users = [
    {
        name: 'James',
        score: 30,
        tries: 1
    },
    {
        name: 'Mary',
        score: 110,
        tries: 4
    },
    {
        name: 'Henry',
        score: 80,
        tries: 3
    }
];

const updateScore = function(newScore) {
    users[currentUser].score += newScore
};

const returnUsers = function() {
    return users
};

const updateTries = function() {
    users[currentUser].tries++;
};

const updateUser = function(newUser) {
    currentUser = newUser
};


/** No Side Effects **/
// now lets rewrite it without side effects
// NSE - No Side Effects

const usersNSE = [
    {
        name: 'James',
        score: 30,
        tries: 1
    },
    {
        name: 'Mary',
        score: 110,
        tries: 4
    },
    {
        name: 'Henry',
        score: 80,
        tries: 3
    }
];


/* Modifies Data */

const storeUser = function(users, user) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name.toLowerCase() === user.name.toLowerCase()) {
            users[i] = user;
            return;
        }
    }
};

/* Pure functions */

// if the same data is passing every time, it will return the same result.
// there are no side effects, we are not modifying nothing outside the function.
const getUserNSE = function(users, name) {
    for(let i = 0; i < users.length; i++) {
        if (users[i].name.toLowerCase() === name.toLowerCase()) {
            return users[i];
        }
    }

    return null;
};

// when we modifying user, we actually change user outside the function because of the way objects work in JS.
// because user is a reference to the actual object, and since it's a reference it's modifying whatever will pass in.
const updateScoreNSE = function(user, newScore) {
    // we'll check if we get a user argument in order to avoid an error.
    if (user) {
        user.score += newScore;
        return user;
    }
};

const updateTriesNSE = function(user) {
// we'll check if we get a user argument in order to avoid an error.
    if (user) {
        user.tries++;
        return user;
    }};

const returnUsersNSE = function() {
    return users
};


const henry = getUserNSE(users, 'Henry');
const henry1 = updateScoreNSE(henry, 30); // we don't have to save henry in the variable, because JS is changing it anyway.
const henry2 = updateTries(henry1);

storeUser(henry); // storeUser is redundant because henry is passed by reference, and changed anyway.

// henry, henry1 and henry2 are all reference to the same object.
// the henry===henry1===henry2 because in JS objects are passed by reference, so they are changed outside the function.

/** Using ForEach **/
// For Each - FE

const usersFE = [
    {
        name: 'James',
        score: 30,
        tries: 1
    },
    {
        name: 'Mary',
        score: 110,
        tries: 4
    },
    {
        name: 'Henry',
        score: 80,
        tries: 3
    }
];

const updateScoreFE = function(users, name, newScore) {
    users.forEach(user => {
        if (user.name.toLowerCase() === name.toLowerCase()) {
            user.score += newScore;
        }
    });

    return users;
};

const updateTriesFE = function(users, name) {
    users.forEach(user => {
        if (user.name.toLowerCase() === name.toLowerCase()) {
            user.tries++;
        }
    });

    return users;
};

const users1 = updateScoreFE(users, 'Henry', 30);
const users2 = updateTriesFE(users, 'Henry');

// users, users1 and users2 are all reference to the same object.
// the users===users1===users2 because in JS objects are passed by reference (and array is an object in JS), so they are changed outside the function.
// we are getting side effects because of that.

// a description of side effect:
// modifying a global object or a parameter passed by reference.




