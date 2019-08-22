const dns = require('dns');

dns.lookup('google.com', (err, address) => {
    console.log(address);
});
// 74.125.68.100
// if we write 74.125.68.100 in the browser we'll reach to google.com

dns.reverse('74.125.68.100', (err, hostname) => {
    console.log(hostname);
});



