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

/*{
    "id": 107257,
    "name": "Las Tablas Colombian Steak House",
    "address": "2942 N Lincoln Ave",
    "city": "Chicago",
    "state": "IL",
    "area": "Chicago / Illinois",
    "postal_code": "60657",
    "country": "US",
    "phone": "7738712414",
    "lat": 41.935137,
    "lng": -87.662815,
    "price": 2,
    "reserve_url": "http://www.opentable.com/single.aspx?rid=107257",
    "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=107257",
    "image_url": "https://www.opentable.com/img/restimages/107257.jpg"
  }*/
console.log(process);
const RestaurantDetail = (props) => {
  const {selectedRestaurant} = props.route.params;
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.name}>{selectedRestaurant.name}</Text>
        <Image
          source={{uri: selectedRestaurant.image_url}}
          style={styles.img}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{selectedRestaurant.address}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{selectedRestaurant.area}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{selectedRestaurant.phone}</Text>
        </View>
        <Button
          title="Go To Reserve"
          onPress={() => Linking.openURL(selectedRestaurant.mobile_reserve_url)}
        />
      </View>
    </SafeAreaView>
  );
};

export {RestaurantDetail};

const styles = StyleSheet.create({
  safe: {flex: 1},
  container: {flex: 1, padding: 10},
  name: {fontSize: 30, fontWeight: '300'},
  img: {height: Dimensions.get('window').height / 3},
  infoContainer: {
    backgroundColor: '#88d4ff',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  infoText: {color: 'white', fontWeight: 'bold'},
});
