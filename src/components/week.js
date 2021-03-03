import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { getForecast } from '../redux/forecast/forecast-selector';
import Day from './day';

export default function Week() {
  const { daily } =useSelector(getForecast);

  function renderItem(data) {
    return <Day data={data}/>
  }

  return (
    <View style={styles.weekConatiner}>
      <View style={styles.daysContainer}>
        <FlatList 
          data={daily}
          renderItem={renderItem}
          keyExtractor={item => String(item.dt)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weekConatiner: {
    justifyContent: "center"
  },

  daysContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(228, 241, 254, 1)'
  },
});