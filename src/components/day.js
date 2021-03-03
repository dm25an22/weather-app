import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { getWeekDay } from '../utils/date-helper';

export default function Day({ data }) {
  const { item } = data;
  const weekDay = getWeekDay(new Date(item.dt * 1000));
  const icon = item.weather[0].icon;
  console.log(item)

  return (
    <TouchableOpacity>
      <View style={styles.dayBtn}>
        <Text style={styles.dayText}>{weekDay}</Text>
        <Image 
          style={styles.icon}
          source={{
            uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dayBtn: {
    marginLeft: 12,
    marginRight: 12,
  },

  dayText: {
    fontSize: 18,
    color: '#fff',
    textAlign: "center",
    marginBottom: 10
  },

  icon: {
    width: 40,
    height: 40,
  }
});