const request = require('request');

function geocodeAddress(address, callback) {
    // 1st arg - options object
    // 2nd arg - callback function, called when the data will come back from the request
    request({
        // we'll get the address from the cli, but we should encode it, in order to use it in the url.
        // The process of converting information into a coded format and then converting it back again from a coded format to the original information.
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
        // the data that we get is json string, and it will convert it to json. will set a header: "accept": "application/json"
        json: true
    }, (error, response, body) => {
        if (error) {
            callback(`Unable to connect to Google servers`);
        } else if (body.status === 'ZERO_RESULTS') {
            callback(`Unable to find that address`);
        } else if (body.status === 'OVER_QUERY_LIMIT') {
            callback(`Refresh google website or try again`);
        } else if (body.status === 'OK') {
            callback(null, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
        else {
            callback(`An unknown error has been occured`, error, body);
        }
    });
}

module.exports = { geocodeAddress };
