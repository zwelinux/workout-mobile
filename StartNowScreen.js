import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function StartNowScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start Now</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Full Body Workout')}
      >
        <Text style={styles.buttonText}>Full Body Workout</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Couch Potato')}
      >
        <Text style={styles.buttonText}>Couch Potato</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Yoga')}
      >
        <Text style={styles.buttonText}>Yoga</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ebb268', // Match HomeScreen background color
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0, // Similar padding to HomeScreen
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30, // Match HomeScreen title font size
    fontWeight: 'bold',
    marginBottom: 20, // Space for buttons
    color: '#2d2d2d',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black', // Changed to darkred to match HomeScreen buttons
    padding: 12, // Similar padding as HomeScreen buttons
    width: 300, // Match the width of the buttons in HomeScreen
    borderRadius: 10,
    textAlign: 'center',
    marginBottom: 15, // Space between buttons
  },
  buttonText: {
    color: '#fff',
    fontSize: 18, // Font size to match HomeScreen button text
    textAlign: 'center',
  },
});
