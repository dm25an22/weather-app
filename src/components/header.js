import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { getForecast } from '../redux/forecast/forecast-selector';

export default function Header() {
  const { cityName, current, daily } = useSelector(getForecast);
  const condition = current.weather[0].main;
  const currentTemp = Math.floor(current.temp);
  const minTemp = Math.floor(daily[0].temp.min);
  const maxTemp = Math.floor(daily[0].temp.max);
  const feelsLike = Math.floor(current.feelsLike);

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.cityName}>{cityName}</Text>
      <Text style={styles.main}>{condition}</Text>
      <Text style={styles.currentTemp}>{currentTemp}{'\u00b0'}</Text>
      <Text style={styles.info}>Min {minTemp}{'\u00b0'} , Max {maxTemp}{'\u00b0'}</Text>
      <Text style={styles.info}>Feels like {feelsLike}{'\u00b0'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: "15%",
    paddingBottom: "10%",
    alignItems: 'center',
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
