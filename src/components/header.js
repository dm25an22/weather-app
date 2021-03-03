import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { getForecast } from '../redux/forecast/forecast-selector';

export default function Header() {
  const forecast = useSelector(getForecast);
  
  return (
    <View style={styles.headerContainer}>
      <Text style={{ color: `#fff`, fontSize: 26 }}>{forecast.cityName}</Text>
      <Text style={{ color: `#fff`, fontSize: 22 }}>{forecast.current.weather[0].main}</Text>
      <Text style={{ color: `#fff`, fontSize: 32 }}>{Math.round(forecast.current.temp)}{'\u00b0'}</Text>
      <Text style={{ color: `#fff`, fontSize: 20 }}>Max 12{'\u00b0'} , Min 8{'\u00b0'}</Text>
      <Text style={{ color: `#fff`, fontSize: 20 }}>Вероятнось осадков 30%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});