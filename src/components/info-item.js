import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function InfoItem({ title, info, children }) {
  return (
    <View style={styles.infoItem}>
      <Text style={styles.infoText}>{title}</Text>
      {info && <Text style={styles.info}>{info}</Text>}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  infoItem: {
    textAlign: "left",
    minWidth: "50%",
    maxWidth: '50%',
  },

  infoText: {
    color: '#fff',
    opacity: 0.7,
    maxWidth: "80%",
    marginBottom: 7,
    flex: 1,
  },

  info: {
    color: "#fff",
    fontSize: 26,
    marginBottom: 7,
  }
});