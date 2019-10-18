import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, FlatList } from 'react-native'
import { withNavigation } from 'react-navigation';

import Result from '../components/Result';

const ResultsList = ({ title, results, navigation }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ResultDetail', { id: item.id })}
                        >
                            <Result result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    }
});

export default withNavigation(ResultsList);