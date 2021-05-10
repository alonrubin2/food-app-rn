import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResturantScreen = ({ navigation }) => {

    const id = navigation.getParam('id');

    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        const res = await yelp.get(`/${id}`);
        setResult(res.data);
    }

    useEffect(() => {
        getResult(id);
    }, [])

    if (!result) {
        return null;
    }

    return (
        <View style={styles.view}>
            <Text style={styles.title}>{result.name}</Text>
            <Text>Selected Images</Text>
            <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) => {
                return <Image style={styles.image} source={{uri: item}} />
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    view:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        height: 200,
        width: 300,
        marginVertical: 10,
        borderRadius: 8
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginVertical: 5
    }
});

export default ResturantScreen;
