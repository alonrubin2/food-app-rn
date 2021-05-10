import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList/ResultsList';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
        <View style={styles.viewStyle}>
            <SearchBar term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {/* <Text style={styles.found}>We have found {results.length} results</Text> */}
            <ScrollView>
                <ResultsList  title="Best Cost" results={filterResultsByPrice('$')} />
                <ResultsList  title="A little Pricy" results={filterResultsByPrice('$$')} />
                <ResultsList  title="Big Spender" results={filterResultsByPrice('$$$')} />
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#f7f7f7',
        flex: 1
    },
    found: {
        marginRight: 5,
        marginVertical: 5
    },
    list: {
        marginRight: 5
    }
})

export default SearchScreen;
