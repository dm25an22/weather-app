import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import Api from './api';
import Header from './components/header';
import Info from './components/info';
import Week from './components/week';
import { rootReducer } from './redux/reducer';

const store = createStore(rootReducer)

export default function App() {

  async function fetchData() {
    const data = await Api.fetchForecastData();
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
