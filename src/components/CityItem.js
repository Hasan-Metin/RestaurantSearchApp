import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CityItem = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onSelect}>
      <Text style={styles.text}>{props.cityName.cityName}</Text>
    </TouchableOpacity>
  );
};

export {CityItem};

const styles = StyleSheet.create({
  container: {
    padding: 7,
    alignItems: 'center',
    margin: 7,
    backgroundColor: '#e0f4fd',
    borderRadius: 7,
  },
  text: {
    fontSize: 33,
    fontWeight: 'bold',
  },
});
