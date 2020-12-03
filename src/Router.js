import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  CityList,
  RestaurantsList,
  RestaurantDetail,
  RestaurantsMap,
} from './pages';

const Tab = createBottomTabNavigator();

const RestaurantRouter = () => {
  return (
    <Tab.Navigator initialRouteName={RestaurantsList}>
      <Tab.Screen name="RestaurantsList" component={RestaurantsList} />
      <Tab.Screen name="RestaurantsMap" component={RestaurantsMap} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Cities" component={CityList} />
        <Stack.Screen name="Restaurants" component={RestaurantRouter} />
        <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
