import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  Button,
  Linking,
} from 'react-native';

import {Banner} from '../components';

const RestaurantDetail = (props) => {
  const {restaurant} = props.route.params.selectedRestaurant;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Banner bannerText={restaurant.name} />
        <Image
          source={{
            uri:
              restaurant.thumb && restaurant.featured_image
                ? restaurant.thumb && restaurant.featured_image
                : 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
          }}
          style={styles.img}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Cuisine: {restaurant.cuisines}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            Phone Number: {restaurant.phone_numbers}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            Address: {restaurant.location.address}
          </Text>
        </View>
        <Button
          title="Go To Reserve"
          onPress={() => Linking.openURL(restaurant.url)}
        />
      </View>
    </SafeAreaView>
  );
};

export {RestaurantDetail};

const styles = StyleSheet.create({
  safe: {flex: 1},
  container: {flex: 1, padding: 10},

  img: {height: Dimensions.get('window').height / 3, borderRadius: 7},
  infoContainer: {
    backgroundColor: '#88d4ff',
    padding: 10,
    margin: 3,
    borderRadius: 5,
    marginTop: 10,
  },
  infoText: {color: 'white', fontWeight: 'bold'},
});
