import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="gray" />
      <TextInput
        placeholder={props.placeholder}
        onChangeText={(value) => props.onSearch(value)}
        style={styles.inputBar}
      />
    </View>
  );
};

export {SearchBar};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    margin: 5,
    padding: 5,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inputBar: {flex: 1, padding: 3},
  text: {fontSize: 20},
});
