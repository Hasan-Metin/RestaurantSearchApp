import React from 'react';
import {StyleSheet, View, SafeAreaView, FlatList} from 'react-native';

import {CityItem, Banner} from '../components';

const cityList = [
  {cityName: 'Adana', cityId: '385'},
  {cityName: 'Ankara', cityId: '60'},
  {cityName: 'Antalya', cityId: '388'},
  {cityName: 'Bodrum', cityId: '400'},
  {cityName: 'Bozcaada', cityId: '406'},
  {cityName: 'Bursa', cityId: '382'},
  {cityName: 'Çeşme', cityId: '379'},
  {cityName: 'Eskişehir', cityId: '403'},
  {cityName: 'Gaziantep', cityId: '397'},
  {cityName: 'İstanbul', cityId: '59'},
  {cityName: 'İzmir', cityId: '376'},
  {cityName: 'İzmit', cityId: '391'},
  {cityName: 'Konya', cityId: '394'},
];

const CityList = (props) => {
  const renderCityItem = ({item}) => (
    <CityItem
      cityName={item}
      onSelect={() =>
        props.navigation.navigate('Restaurants', {selectedCity: item})
      }
    />
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.safe}>
        <Banner bannerText=" FIND YOUR FAVOROITE RESTAURANT" />

        <FlatList
          style={styles.safe}
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
  seperator: {borderWidth: 1.2, borderColor: '#00e2aa'},
  safe: {flex: 1},
});
