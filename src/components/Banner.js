import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Banner = ({bannerText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{bannerText}</Text>
    </View>
  );
};

export {Banner};

const styles = StyleSheet.create({
  container: {
    padding: 3,
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#9c27b0',
    borderRadius: 5,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
