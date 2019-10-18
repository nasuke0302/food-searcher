import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default ({ result }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: result.image_url }}
                style={styles.image}
            />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 140,
        marginBottom: 5,
        borderRadius: 5,
    },
    name: {
        fontWeight: 'bold',
    }
});