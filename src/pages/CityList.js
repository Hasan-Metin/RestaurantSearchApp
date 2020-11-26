import React, {useState, useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, FlatList} from 'react-native';
import axios from 'axios';

import {CityItem, SearchBar, Banner} from '../components';

const baseApiEndpoint = 'http://opentable.herokuapp.com/api';
let originalCityList;

const CityList = (props) => {
  const [cityList, setCityList] = useState([]);

  const fetchCityData = async () => {
    const {data} = await axios.get(`${baseApiEndpoint}` + '/cities');
    setCityList(data.cities);
    originalCityList = [...data.cities];
  };

  useEffect(() => {
    fetchCityData();
  }, []);

  const renderCityItem = ({item}) => (
    <CityItem
      cityName={item}
      onSelect={() =>
        props.navigation.navigate('Restaurants', {selectedCity: item})
      }
    />
  );

  function searchCity(value) {
    const filteredCityList = originalCityList.filter((city) => {
      const searchText = value.toLowerCase();
      const findText = city.toLowerCase();
      return findText.startsWith(searchText);
    });
    setCityList(filteredCityList);
  }

  return (
    <SafeAreaView>
      <View>
        <Banner bannerText="CITIES" />
        <SearchBar
          placeholder="Search city..."
          onSearch={(value) => searchCity(value)}
        />
        <FlatList
          data={cityList}
          renderItem={renderCityItem}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
        />
      </View>
    </SafeAreaView>
  );
};

export {CityList};

const styles = StyleSheet.create({
  seperator: {borderWidth: 1, borderColor: '#e0e0e0'},
});
