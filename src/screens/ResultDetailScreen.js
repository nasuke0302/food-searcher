import React, { useState, useEffect } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { EvilIcons, Feather } from '@expo/vector-icons';

import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';

export default ({ navigation }) => {
    const [result, setResult] = useState(null);

    const id = navigation.getParam('id');

    getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) return null;

    return (
        <View>
            <Text style={styles.name}>{result.name}, {result.price}</Text>
            <Text style={styles.rating}>{result.rating} Stars, based on {result.review_count} reviews</Text>
            <View style={styles.contactWrapper}>
                <Feather name='phone'> {result.phone}</Feather>
                <EvilIcons name='location'> {result.location.address1}</EvilIcons>
            </View>
            <Text style={styles.galleryTitle}>Gallery</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image source={{ uri: item }} style={styles.galleryImage}/>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        marginHorizontal: 15,
        fontWeight: 'bold',
        fontSize: 25,
    },
    rating: {
        marginHorizontal: 15,
        color: 'gray',
        fontSize: 12,
        marginBottom: 15,
    },
    contactWrapper: {
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    galleryImage: {
        width: 250,
        height: 140,
        margin: 15,
        borderRadius: 5,
    },
    galleryTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 15,

    }
});