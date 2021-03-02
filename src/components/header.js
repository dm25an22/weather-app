import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={{ color: `#fff`, fontSize: 26 }}>Katowice</Text>
      <Text style={{ color: `#fff`, fontSize: 22 }}>Description whether</Text>
      <Text style={{ color: `#fff`, fontSize: 32 }}>12</Text>
      <Text style={{ color: `#fff`, fontSize: 20 }}>Max 12 , Min 8</Text>
      <Text style={{ color: `#fff`, fontSize: 20 }}>Вероятнось осадков 30%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});