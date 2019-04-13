const yargs = require('yargs');
const axios = require('axios'); // Promise based HTTP client for the browser and node.js

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true // always parse the address as a string
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`;

axios.get(geocodeUrl).then(response => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    } else if (response.data.status === 'OVER_QUERY_LIMIT') {
        throw new Error('Refresh google website or try again');
    } else if (response.data.status === 'OK') {
        const secretKey = '291734728f8cf09db9a5821a4af327bc';
        const latitude = response.data.results[0].geometry.location.lat;
        const longitude = response.data.results[0].geometry.location.lng;
        const weatherUrl = `https://api.darksky.net/forecast/${secretKey}/${latitude},${longitude}`;
        return axios.get(weatherUrl);
    }
}).then(response => {
    const temperature = response.data.currently.temperature;
    const apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's curreuntly ${temperature} degrees.\nIt feels like ${apparentTemperature} degrees.`);
}).catch(err => {
    if (err.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers');
    } else {
        console.log(err.message);
    }
});