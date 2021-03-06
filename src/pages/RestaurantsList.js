import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import axios from 'axios';

import {RestaurantItem, Banner, SearchBar} from '../components';
import Context from '../context/store';

const baseApiEndpoint = 'https://developers.zomato.com/api/v2.1/search';
let originalRestaurantList;

const RestaurantsList = (props) => {
  const {state, dispatch} = useContext(Context);

  const {selectedCity} = state;

  const [restaurantList, setRestaurantList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchRestaurantData = async () => {
    const {data} = await axios({
      method: 'GET',
      url: baseApiEndpoint,
      headers: {
        'user-key': '59a4eafdc4a721bacc7cfab8688273d1',
        'content-type': 'application/json',
      },
      params: {entity_id: selectedCity.cityId, entity_type: 'city'},
    });

    setRestaurantList(data.restaurants);
    originalRestaurantList = [...data.restaurants];
    setLoading(false);
  };

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  function searchRestaurant(value) {
    const filteredRestaurantList = originalRestaurantList.filter(
      (restaurant) => {
        const searchText = value.toLowerCase();
        const findText = restaurant.restaurant.name.toLowerCase();
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
        <Banner
          bannerText={`RESTAURANTS OF ${selectedCity.cityName.toUpperCase()}`}
        />

        <SearchBar
          placeholder="Search restaurant..."
          onSearch={searchRestaurant}
        />
        <View>
          {isLoading ? (
            <View style={styles.indicatorContainer}>
              <ActivityIndicator size="large" color="#00ff00" />
            </View>
          ) : (
            <FlatList
              data={restaurantList}
              renderItem={renderRestaurantItem}
              keyExtractor={(_, index) => index.toString()}
              ItemSeparatorComponent={() => <View style={styles.seperator} />}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export {RestaurantsList};

const styles = StyleSheet.create({
  seperator: {borderWidth: 2, borderColor: '#00b979'},
  safe: {flex: 1},
  indicatorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height * 0.85,
  },
});
