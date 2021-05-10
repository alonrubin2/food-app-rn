import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer -b4YeVswLlPzghm9EcqnpmMmqlZNFg6p16RyVpslDFgstJydvez1c_8GOcBMSJ7o7Jrqh5r7_0soFzB1xYqZZ7d1-f1P0fwMKkDarytPtdCpT7d5hVKrZi0OgHaKYHYx', 
    }
});

