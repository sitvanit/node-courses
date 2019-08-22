require('./print');
require('./print');
// it will print just 1 time because of the module is already in the cache.

require('./print')();
require('./print')();
// it will print twice.



