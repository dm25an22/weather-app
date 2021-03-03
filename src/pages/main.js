import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import Header from '../components/header';
import Info from '../components/info';
import Week from '../components/week';
import { useLoadStatus } from '../hooks';
import { Operation as forecastOperation } from '../redux/forecast/forecast';

export default function Main() {
  const { isLoaded, setIsLoaded, error, setError } = useLoadStatus();
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
      return (
        <View style={styles.container}>
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
    backgroundColor: 'rgba(34, 167, 240, 1)',
    flex: 1,
  },
});