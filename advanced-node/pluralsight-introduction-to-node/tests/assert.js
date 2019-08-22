// assert.equal => shallow ==
// assert.strictEqual =>   ===
// assert.deepEqual =>     ===
const assert = require('assert');
const fun = require('./mathFun');

assert.equal(fun.evenDoublerSync(2), 4);
assert.throws(() => { fun.evenDoublerSync(3); }, /Odd/);

fun.evenDoubler(2, (err, results) => {
    assert.ifError(err);
    assert.equal(results, 4, "evenDoubler failed on even number"); // the last arg will be printed if the test will fail.
});

fun.evenDoubler(3, (err, results) => {
    assert.notEqual(err, null);
});

