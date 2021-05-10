import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        searchApi('breakfest');
    }, [])

    const searchApi = async (searchTerm) => {
        try {
            const res = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(res.data.businesses);
            setErrorMessage('');
        }
        catch (err) {
            setErrorMessage('Something went wrong, Please try again later')
        }
    };

    return [searchApi, results, errorMessage];
};