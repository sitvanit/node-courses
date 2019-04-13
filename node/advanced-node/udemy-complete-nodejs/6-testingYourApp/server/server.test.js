const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('server', () => {
    describe('GET', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect('Hello world!')
                .end(done);
        });
    });

    describe('GET /users', () => {
        it('should return me', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect(res => {
                    expect(res.body).toInclude({
                        name: 'Sitvanit Meltzer',
                        age: 33
                    })
                })
                .end(done);
        });
    });

    describe('error', () => {
        it('should return an error', (done) => {
            request(app)
                .get('/error')
                .expect(404)
                .expect({
                    error: 'Page not found.',
                    name: 'Todo app v1.0'
                })
                .end(done);
        });

        it('should return an error - with expect', (done) => {
            request(app)
                .get('/error')
                .expect(404)
                .expect(res => {
                    expect(res.body).toInclude({
                        error: 'Page not found.',
                        name: 'Todo app v1.0'
                    })
                })
                .end(done);
        });
    });
});
