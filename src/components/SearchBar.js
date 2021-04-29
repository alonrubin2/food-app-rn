import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <TextInput 
            style={styles.search} 
            placeholder="Search" 
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            />
            <AntDesign style={styles.iconStyle} name="search1" size={32} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 8,
        margin: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    iconStyle: {
        marginHorizontal: 10,
    },
    search: {
        width: '80%',
        height: '100%',
        fontSize: 18,
    }
})

export default SearchBar;
