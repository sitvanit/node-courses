const request = require('request');
const tuc = require('temp-units-conv');

const getWeather = (secretKey, latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${secretKey}/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(null, {
                temperature: convertToCelius(body.currently.temperature),
                apparentTemperature: convertToCelius(body.currently.apparentTemperature),
            });
        } else {
            callback('Unable to fetch weather');
        }
    });
};

const convertToCelius = (fDegrees) => {
    return Math.round(tuc.f2c(fDegrees));
};

module.exports.getWeather = getWeather;