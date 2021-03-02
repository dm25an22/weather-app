import React from 'react';
import { StyleSheet, View } from 'react-native';
import Day from '../day';

export default function Week() {
  return (
    <View style={styles.weekConatiner}>
      <View style={styles.daysContainer}>
        <Day />
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