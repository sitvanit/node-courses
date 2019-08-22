// 'should' extends node's assert module
// before run it we should install should and mocha (mocha globally if we want it working from the cli.
// run the file from the cli with: 'mocha should.js'
// it.only will run just that test.
// it.skip will skip that test.
// mocha -R landing tests/should.js will run it as in the airport
const should = require('should');
const fun = require('./mathFun');

describe('mathFun', () => {
    describe('when used synchronously', () => {
        it('should double even numbers correctly', () => {
            fun.evenDoublerSync(2).should.equal(4);
        });

        it('should throw on odd numbers', () => {
            (function() { fun.evenDoublerSync(3) }).should.throw(/Odd/);
        })
    });

    describe('when used asynchronously', () => {
        it('should double even numbers correctly', () => {
            fun.evenDoubler(2, (err, results) => {
                should.not.exist(err);
                results.should.equal(4);
            })
        });

        it('should throw error on odd numbers', () => {
            fun.evenDoubler(3, (err, results) => {
                should.exist(err);
                should.not.exist(results);
            })
        })
    })
});

