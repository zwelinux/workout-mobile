// App.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Local Image */}
      <Image
        source={require('./assets/couch_potato.png')} 
        style={styles.image}
      />

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>POTATA</Text>
          <Text style={styles.description}>Simply Workout At Home</Text>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Start Now')}>
            <Text style={styles.buttonText}>Start Now</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('App Info')}>
            <Text style={styles.buttonText2}>App Info</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.versionContainer}>
          <Text style={styles.version}>v1.1.2 stable</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    marginBottom: 50,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 0,
    color: '#2d2d2d',
    textAlign: 'center',
  },
  description: {
    fontSize: 20,
    color: '#3d3d3d',
    textAlign: 'center',
    marginTop: 10,
  },
  buttonGroup: {
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    padding: 13,
    height: 50,
    width: 300,
    backgroundColor: 'black',
    borderRadius: 10,
    marginBottom: 10,
  },
  button2: {
    padding: 13,
    height: 50,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    marginBottom: 10,
    borderColor: '#7f7f7f',
    borderWidth: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
  },
  buttonText2: {
    color: '#2d2d2d',
    fontSize: 17,
    textAlign: 'center',
  },
  versionContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  version: {
    fontSize: 14,
    color: '#2d2d2d',
    textAlign: 'center',
  },
});

export default HomeScreen;
