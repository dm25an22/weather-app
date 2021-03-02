import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from './components/header';
import Info from './components/info';
import Week from './components/week';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Week />
      <ScrollView style={styles.moreInfoContainer}>
        <Info />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(34, 167, 240, 1)',
  },
});
