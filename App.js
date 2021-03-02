import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Api from './api';
import Header from './components/header';
import Info from './components/info';
import Week from './components/week';

export default function App() {

  
async function fetchData() {
  const data = await Api.fetchForecastData();
}

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <Week />
      <ScrollView style={styles.moreInfoContainer}>
        <Info />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(34, 167, 240, 1)',
  },
});
