import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {

    const [term, setTerm] = useState('');

    return (
        <View style={styles.viewStyle}>
            <SearchBar term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => console.log('term was submitted')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#fff',
        height: '100%'
    }
})

export default SearchScreen;
