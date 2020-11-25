import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CityItem = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onSelect}>
      <Text style={styles.text}>{props.cityName}</Text>
    </TouchableOpacity>
  );
};

export {CityItem};

const styles = StyleSheet.create({
  container: {
    padding: 7,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
  },
});
