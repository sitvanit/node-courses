// async function always returns Promise, even if the return is a string, it will return Promise.resolve('some string').

// () => {
//     return new Promise((resolve, reject) => {
//         resolve('Mike')
//     })
// }

// is equal to

// async () => {
//     return 'Mike';
// }


// () => {
//     return new Promise((resolve, reject) => {
//         reject(new Error('This is an error'));
//     })
// }

// is equal to

// async () => {
//     throw new Error('This is an error');
// }


const users = [{
    id: 1,
    name: 'Andrew',
    schoolId: 101
}, {
    id: 2,
    name: 'Jessica',
    schoolId: 999
}];

const grades = [{
    id: 1,
    schoolId: 101,
    grade: 86
}, {
    id: 2,
    schoolId: 999,
    grade: 100
}, {
    id: 3,
    schoolId: 101,
    grade: 80
}];

const getUser = id => new Promise((resolve, reject) => {
    const user = users.find(user => user.id === id);

    if (user) {
        resolve(user);
    } else {
        reject(`Unable to find user with id of ${id}.`)
    }
});

const getGrades = schoolId => new Promise((resolve, reject) => {
    resolve(grades.filter(grade => grade.schoolId === schoolId))
});

const getStatusPromise = userId => {
    let user;

    return getUser(userId).then(tempUser => {
        user = tempUser;

        return getGrades(user.schoolId).then(grades => {
            let average;
            
            if (grades.length > 0) {
                average = grades.map(grade => grade.grade).reduce((a, b) => a + b) / grades.length;
            }

            return `${user.name} has a ${average} in the class`;
        });
    })
};

const getStatusAsyncAwait = async userId => {
    let average;

    const user = await getUser(userId);
    const grades = await getGrades(user.schoolId);

    if (grades.length > 0) {
        average = grades.map(grade => grade.grade).reduce((a, b) => a + b) / grades.length;
    }

    return `${user.name} has a ${average} in the class`;
};

getUser(1)
    .then(user => console.log(user))
    .catch(e => console.log(e));

getGrades(101)
    .then(schoolId => console.log(schoolId))
    .catch(e => console.log(e));

getStatusPromise(1)
    .then(status => console.log(status))
    .catch(e => console.log(e));

getStatusAsyncAwait(1)
    .then(status => console.log(status))
    .catch(e => console.log(e));