import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

const RestaurantList = (props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Restaurants {props.route.selectedCity}</Text>
      </View>
    </SafeAreaView>
  );
};

export {RestaurantList};

const styles = StyleSheet.create({});
