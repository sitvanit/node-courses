/** HTTP requests in Node.js using Axios **/

// Axios is a very popular JavaScript library you can use to perform HTTP requests, that works in both Browser and
// Node.js platforms.
// It supports all modern browsers, including support for IE8 and higher.
// It is promise-based, and this lets us write async/await code to perform XHR requests very easily.

// Using Axios has quite a few advantages over the native Fetch API:
// supports older browsers (Fetch needs a polyfill)
// has a way to abort a request
// has a way to set a response timeout
// has built-in CSRF protection
// supports upload progress
// performs automatic JSON data transformation
// works in Node.js

const axios = require('axios');

// ou can start an HTTP request from the axios object
axios({
    url: 'https://dog.ceo/api/breeds/list/all',
    method: 'get',
    data: {
        foo: 'bar'
    }
});

// but for convenience, you will generally use:
// axios.get()
// axios.post()
// (like in jQuery you would use $.get() and $.post() instead of $.ajax())
// axios.delete()
// axios.put()
// axios.patch()
// axios.options()
// and a method to get the HTTP headers of a request, discarding the body:
// axios.head()


/** GET requests **/

const getBreeds = () => {
    try {
        return axios.get('https://dog.ceo/api/breeds/list/all')
    } catch (error) {
        console.error(error)
    }
};

const countBreedsAsync = async () => {
    const breeds = await getBreeds();
    if (breeds.data.message) {
        console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
    }
};

const countBreedsPromise = async () => {
    const breeds = getBreeds()
        .then(response => {
            if (response.data.message) {
                console.log(
                    `Got ${Object.entries(response.data.message).length} breeds`
                )
            }
        })
        .catch(error => {
            console.log(error)
        })
};

countBreedsAsync();
countBreedsPromise();

/* Add parameters to GET requests */
// axios.get('https://site.com/?foo=bar')
// or
// axios.get('https://site.com/', {
//   params: {
//     foo: 'bar'
//   }
// })


/** POST requests **/

// axios.post('https://site.com/');

// An object containing the POST parameters is the second argument:
// axios.post('https://site.com/', {
//   foo: 'bar'
// })
