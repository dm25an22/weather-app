import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/header';
import Info from '../components/info';
import Week from '../components/week';
import { useLoadStatus } from '../hooks';
import { Operation as forecastOperation } from '../redux/forecast/forecast';
import { getForecast } from '../redux/forecast/forecast-selector';
import { getBackgroundColorByCondition } from '../utils/common';

export default function Main() {
  const { isLoaded, setIsLoaded, error, setError } = useLoadStatus();
  const forecast = useSelector(getForecast);
  const dispatch = useDispatch();

  function onSuccess() {
    setIsLoaded(true);
  }

  function onError() {
    setError(error);
  }

  useEffect(() => {
    dispatch(forecastOperation.fetchForecast(onSuccess, onError));
  }, []);

  function getMarkupByLoadStatus() {
    if (error) {
      return <View>Error: {error.message}</View>;
    } else if (!isLoaded) {
      return <View style={styles.container}></View>;
    } else {
      const condition = forecast.current.weather[0].main;
      return (
        <View style={{flex: 1, backgroundColor: `${getBackgroundColorByCondition(condition)}`}}>
          <Header />
          <Week />
          <ScrollView style={styles.moreInfoContainer}>
            <Info />
          </ScrollView>
        </View>
      );
    }
  }

  return (
    <>
      {getMarkupByLoadStatus()}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});