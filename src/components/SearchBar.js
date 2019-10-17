import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <AntDesign name="search1" style={styles.icon} />
            <TextInput
                placeholder='Search'
                autoCorrect={false}
                autoCapitalize='none'
                style={styles.input}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
    },
    input: {
        flex: 1,
        fontSize: 18,
    },
    icon: {
        fontSize: 30,
        color: 'gray',
        alignSelf: 'center',
        marginHorizontal: 15
    }
});