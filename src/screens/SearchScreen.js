import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import useResults from '../hooks/useResults';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

export default () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = price => results.filter(result => result.price === price);

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />

            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList title='Cost Effective' results={filterResultsByPrice('$')} />
                <ResultsList title='Bit Pricier' results={filterResultsByPrice('$$')} />
                <ResultsList title='Big Spender' results={filterResultsByPrice('$$$')} />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
});