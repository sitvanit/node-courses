const axios = require('axios');


/** getExchangeRate **/

const getExchangeRatePromise = (from, to) => {
    return axios.get('http://data.fixer.io/api/latest?access_key=cd1c5effe0cd189ef3c0ae34fad9550c')
        .then(response => {
            const euro = 1 / response.data.rates[from];
            const rate = euro * response.data.rates[to];

            return rate;
        });
};

const getExchangeRateAsync = async (from, to) => {
    try {
        const response = await axios.get('http://data.fixer.io/api/latest?access_key=cd1c5effe0cd189ef3c0ae34fad9550c');
        const euro = 1 / response.data.rates[from];
        const rate = euro * response.data.rates[to];

        if (isNaN(rate)) {
            throw new Error();
        }

        return rate;
    } catch (e) {
        throw new Error(`Unable to get exchange rate for ${from} and ${to}`);
    }
};


/** getCountries **/

const getCountriesPromise = (currencyCode) => {
    return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
        .then(response => response.data.map(country => country.name));
};

const getCountriesAsync = async (currencyCode) => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
        return response.data.map(country => country.name);
    } catch (e) {
        throw new Error(`Unable to get countries that use ${currencyCode}`);
    }
};


/** convertCurrency **/

const convertCurrencyPromise = (from, to, amount) => {
    let convertedAmount;

    getExchangeRateAsync(from, to)
        .then(rate => {
            convertedAmount = (rate * amount).toFixed(2);
            return getCountriesAsync(to);
        }).then(countries => console.log(`${amount} ${from} is worth ${convertedAmount} ${to}. You can spend in the following contries: ${countries.join(', ')}.`));
};

const convertCurrencyAsync = async (from, to, amount) => {
    const rate = await getExchangeRateAsync(from, to);
    const convertedAmount = (rate * amount).toFixed(2);
    const countries = await getCountriesAsync(to);
    console.log(`${amount} ${from} is worth ${convertedAmount} ${to}. You can spend in the following contries: ${countries.join(', ')}.`);
};



getExchangeRatePromise('USD', 'CAD')
    .then(rate => {
    console.log(rate);
});

getExchangeRateAsync('USD', 'CAD')
    .then(rate => {
        console.log(rate);
});


getCountriesPromise('CAD')
    .then(countries => console.log(countries));

getCountriesAsync('CAD')
    .then(countries => console.log(countries));


convertCurrencyPromise('CAD', 'USD', 20);
convertCurrencyAsync('CAD', 'USD', 20);

convertCurrencyAsync('CAD', 'QQQ', 20);