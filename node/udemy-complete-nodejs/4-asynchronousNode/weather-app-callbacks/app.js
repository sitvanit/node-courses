const yargs = require('yargs');

const geocode = require('./geocode');
const weather = require('./weather');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        const secretKey = '291734728f8cf09db9a5821a4af327bc';
        weather.getWeather(secretKey, results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                // console.log(JSON.stringify(weatherResults, undefined, 2));
                console.log(`It's curreuntly ${weatherResults.temperature} degrees.\nIt feels like ${weatherResults.apparentTemperature} degrees.`);
            }
        });
    }
});
