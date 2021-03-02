import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Day() {
  return (
    <TouchableOpacity>
      <View style={styles.dayBtn}>
        <Text style={styles.dayText}>Пн</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dayBtn: {
    marginLeft: 10,
    marginRight: 10,
  },

  dayText: {
    fontSize: 18,
    color: '#fff'
  },
});