import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { getForecast } from '../redux/forecast/forecast-selector';

export default function Header() {
  const { cityName, current, daily } = useSelector(getForecast);
  const main = current.weather[0].main;
  const currentTemp = Math.round(current.temp);
  const minTemp = Math.round(daily[0].temp.min);
  const maxTemp = Math.round(daily[0].temp.max);
  const feelsLike = Math.round(current.feelsLike);
  const icon = current.weather[0].icon;

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.cityName}>{cityName}</Text>
      <Text style={styles.main}>{main}</Text>
      <Text style={styles.currentTemp}>{currentTemp}{'\u00b0'}</Text>
      <Text style={styles.info}>Min {minTemp}{'\u00b0'} , Max {maxTemp}{'\u00b0'}</Text>
      <Text style={styles.info}>Feels like {feelsLike}{'\u00b0'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cityName: {
    color: "#fff",
    fontSize: 26,
  },

  main: {
    color: "#fff",
    fontSize: 22,
  },

  currentTemp: {
    color: "#fff",
    fontSize: 36,
    paddingTop: 10,
    paddingBottom: 10,
  },

  info: {
    color: `#fff`,
    fontSize: 20
  }
});