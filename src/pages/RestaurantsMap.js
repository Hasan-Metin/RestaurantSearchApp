import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

const RestaurantsMap = (props) => {
  //const {selectedCity} = props.route.params;
  //console.log(selectedCity);
  return (
    <SafeAreaView style={styles.safe}>
      <View>
        <Text>Map</Text>
      </View>
    </SafeAreaView>
  );
};

export {RestaurantsMap};

const styles = StyleSheet.create({
  safe: {flex: 1},
});
