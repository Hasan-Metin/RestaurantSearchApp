import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={props.placeholder}
        onChangeText={(value) => props.onSearch(value)}
        style={styles.container}
      />
    </View>
  );
};

export {SearchBar};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    margin: 5,
    padding: 3,
    borderRadius: 5,
  },
  text: {fontSize: 20},
});
