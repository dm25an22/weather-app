import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useLoadStatus } from '../hooks';
import Main from '../pages/main';
import { Operation as forecastOperation } from '../redux/forecast/forecast';


export default function LoaderContainer() {
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
        <Main />
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