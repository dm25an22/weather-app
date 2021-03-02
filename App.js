import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import Api from './src/api';
import Header from './src/components/header';
import Info from './src/components/info';
import Week from './src/components/week';
import { rootReducer } from './src/redux/reducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {

  async function fetchData() {
    const {coords} = await getPosition();
    const data = await Api.fetchForecastData(coords.latitude, coords.longitude);
  }

  function getPosition() {
    return new Promise((resolve, reject) => 
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );
}

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <Week />
        <ScrollView style={styles.moreInfoContainer}>
          <Info />
        </ScrollView>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(34, 167, 240, 1)',
  },
});
