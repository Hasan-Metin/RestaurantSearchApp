import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

const RestaurantItem = (props) => {
  const {
    restaurant: {restaurant},
  } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={props.onSelect}>
      <Image
        style={styles.image}
        source={{
          uri:
            restaurant.thumb && restaurant.featured_image
              ? restaurant.thumb && restaurant.featured_image
              : 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
        }}
      />
      <Text style={styles.name}>{restaurant.name}</Text>
    </TouchableOpacity>
  );
};

export {RestaurantItem};

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get('window').height / 3,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#bdbdbd',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});
