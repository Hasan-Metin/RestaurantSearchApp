import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const App = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.safe}>
        <Text>MAP</Text>
        <MapView
          style={styles.safe}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: 37.788,
              longitude: -122.43,
            }}
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
});
