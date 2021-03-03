import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { getWeekDay } from '../utils/date-helper';

export default function Day({ data }) {
  const { item } = data;
  const weekDay = getWeekDay(new Date(item.dt * 1000));

  return (
    <TouchableOpacity>
      <View style={styles.dayBtn}>
        <Text style={styles.dayText}>{weekDay}</Text>
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
    color: '#fff'
  },
});