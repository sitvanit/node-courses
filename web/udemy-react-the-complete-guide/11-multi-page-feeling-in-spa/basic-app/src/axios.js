import axios from 'axios';

// the instance takes all of the defaults that already sets and override the relevant attributes.
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;
