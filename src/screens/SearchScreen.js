import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import useResults from '../hooks/useResults';
import SearchBar from '../components/SearchBar';

export default () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
 
    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We found {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});