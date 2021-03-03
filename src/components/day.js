import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ActionCreator } from '../redux/app-state/app-state';
import { getSelectedDay } from '../redux/app-state/app-state-selector';
import { getWeekDay } from '../utils/date-helper';

export default function Day({ data }) {
  const selectedDay = useSelector(getSelectedDay);
  const dispatch = useDispatch();
  const { item } = data;
  const date = new Date(item.dt * 1000);
  const weekDay = getWeekDay(date);
  const icon = item.weather[0].icon;

  function getStyle() {
    return selectedDay.getDate() === date.getDate() ? styles.activeDay : styles.dayText;
  }

  function changeSelectedDay() {
    dispatch(ActionCreator.setSelectedDay(date));
  }

  return (
    <TouchableOpacity onPress={changeSelectedDay}>
      <View style={styles.dayBtn}>
        <Text style={getStyle()}>{weekDay}</Text>
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

  activeDay: {
    color: "#264653",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10
  },

  icon: {
    width: 40,
    height: 40,
  }
});