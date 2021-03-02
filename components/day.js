import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function Day() {
  return (
    <View style={styles.dayBtn}>
      <Button style={styles.dayBtn} title="Пн" />
    </View>
  );
};

const styles = StyleSheet.create({
  dayBtn: {
    marginLeft: 10,
    marginRight: 10,
  },
});