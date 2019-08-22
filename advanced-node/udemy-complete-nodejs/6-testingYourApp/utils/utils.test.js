const expect = require('expect');

const utils = require('./utils');

describe('utils', () => {
    describe('add', () => {
        it('should add two numbers', () => {
            const res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
        });

        // when we had 'done' arg, mocha knows that the test is of async func, and it would wait till the done has been called
        it('should async add 2 numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    });

    describe('square', () => {
        it('should square a number', () => {
            const res = utils.square(5);
            expect(res).toBe(25).toBeA('number');
        });

        it('should async square a number', (done) => {
            // const res = utils.square(5);
            utils.asyncSquare(5, (res) => {
                expect(res).toBe(25).toBeA('number');
                done();
            });
        });
    });

    it('should verify first and last names are set', () => {
        const user = {
            age: 33,
            location: 'Israel'
        };
        const fullName = 'Sitvanit Meltzer';
        const res = utils.setName(user, fullName);

        expect(res).toEqual(user); // objects are passed by reference, so the user has now the first and last name.

        expect(res).toInclude({
            firstName: 'Sitvanit',
            lastName: 'Meltzer'
        });
    });

    it('should expect some values', () => {
        expect(12).toBe(12);

        expect({name: 'Andrew'}).toEqual({name: 'Andrew'}); // for objects we should test with toEqual, because it's 2 different objects.

        expect(([2, 3, 4])).toInclude(3);

        expect(([2, 3, 4])).toExclude(5);

        expect({
            name: 'Andrew',
            age: 25,
            location: 'Philadelphia'
        }).toInclude({
            age: 25
        });

        expect({
            name: 'Andrew',
            age: 25,
            location: 'Philadelphia'
        }).toExclude({
            age: 23
        });
    });
});
