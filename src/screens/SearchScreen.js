import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';

export default () => {
    const [term, setTerm] = useState('');

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => console.log('object')}
            />
        </View>
    )
}

const styles = StyleSheet.create({

});