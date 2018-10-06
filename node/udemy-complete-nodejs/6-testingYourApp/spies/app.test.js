const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('app', () => {
    const db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        const spy = expect.createSpy();
        spy('Andrew', 25);
        expect(spy).toHaveBeenCalled('Andrew, 25');
    });

    it('should call saveUser with user object', () =>{
        const email = 'sitvanitm@gmail.com';
        const password = 'tubdr123';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});