import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, StyleSheet, FlatList, Image, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Result from './Result/Result';


const ResultsList = ({ title, results, navigation }) => {

    if (!results.length) {
        return null;
    }

    return (
        <View style={styles.view}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.resultsNum}>{results.length} Restaurants found</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Restaurant', {id: item.id})}>
                            <Result result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginRight: 5
    },
    resultsNum: {
        marginHorizontal: 10
    },
    view: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsList);
