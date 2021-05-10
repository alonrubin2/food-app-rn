import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Result = ({ result }) => {
    return (
        <View style={styles.view}>
            <View style={styles.resultBody}>
                <Image style={styles.image} source={{ uri: result.image_url }} />
                <View>
                    <Text style={styles.title}>{result.name}</Text>
                    <Text style={styles.resultData}>{result.rating} Stars, {result.review_count} Reviews</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        marginHorizontal: 2,
        height: 150,
        width: 220,
        backgroundColor: '#fff',
        borderRadius: 8
    },
    image: {
        height: '70%',
        width: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 5,
        marginBottom: 5
    },
    resultData: {
        marginRight: 5
    },
    resultBody: {
        justifyContent: 'space-between',
        height: '100%'
    }
});

export default Result;
