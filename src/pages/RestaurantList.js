import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import axios from 'axios';

import {RestaurantItem, Banner, SearchBar} from '../components';

const baseApiEndpoint = 'http://opentable.herokuapp.com/api';
let originalRestaurantList;

const RestaurantList = (props) => {
  const {selectedCity} = props.route.params;

  const [restaurantList, setRestaurantList] = useState([]);

  const fetchRestaurantData = async () => {
    const {data} = await axios.get(`${baseApiEndpoint}` + '/restaurants', {
      params: {
        city: selectedCity,
      },
    });
    setRestaurantList(data.restaurants);
    originalRestaurantList = [...data.restaurants];
  };
  console.log(originalRestaurantList);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  function searchRestaurant(value) {
    const filteredRestaurantList = originalRestaurantList.filter(
      (restaurant) => {
        const searchText = value.toLowerCase();
        const findText = restaurant.name.toLoweriCase();
        return findText.indexOf(searchText) > -1;
      },
    );
    setRestaurantList(filteredRestaurantList);
  }

  const renderRestaurantItem = ({item}) => (
    <RestaurantItem
      restaurant={item}
      onSelect={() =>
        props.navigation.navigate('Details', {selectedRestaurant: item})
      }
    />
  );

  return (
    <SafeAreaView>
      <View>
        <Banner bannerText={`RESTAURANTS OF ${selectedCity.toUpperCase()}`} />
        <SearchBar
          placeholder="Search restaurant..."
          onSearch={searchRestaurant}
        />
        <FlatList
          data={restaurantList}
          renderItem={renderRestaurantItem}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
        />
      </View>
    </SafeAreaView>
  );
};

export {RestaurantList};

const styles = StyleSheet.create({});
