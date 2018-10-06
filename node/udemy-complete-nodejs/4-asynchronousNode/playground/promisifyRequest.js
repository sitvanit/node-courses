const request = require('request');

const geocodeAddress = address => {
    return new Promise((resolve, reject) => {
        request({
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject(`Unable to connect to Google servers`);
            } else if (body.status === 'ZERO_RESULTS') {
                reject(`Unable to find that address`);
            } else if (body.status === 'OVER_QUERY_LIMIT') {
                reject(`Refresh google website or try again`);
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
            else {
                reject(`An unknown error has been occured`, error, body);
            }
        });
    })
};

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});
