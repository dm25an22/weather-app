import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import Header from '../components/header';
import Info from '../components/info';
import Week from '../components/week';
import { Operation as forecastOperation } from '../redux/forecast/forecast';

 export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(forecastOperation.fetchForecast());
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