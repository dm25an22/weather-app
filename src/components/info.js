import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Info() {
  return (
    <View style={styles.infoContainer}>
      <View>
        <Text style={styles.infoText}>Восход</Text>
        <Text style={styles.infoText}>06:23</Text>
      </View>
      <View>
        <Text style={styles.infoText}>Заход</Text>
        <Text style={styles.infoText}>17:27</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: 'rgba(34, 167, 240, 1)',
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderColor: 'rgba(228, 241, 254, 1)'
  },

  infoText: {
    color: '#fff'
  }
});