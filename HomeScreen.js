// App.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://pbs.twimg.com/media/FYXyWNHXwAARWEP?format=png&name=900x900' }} 
      style={styles.background}
    >
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        <Image
          source={{ uri: 'https://th.bing.com/th/id/R.3bbace4913a21927a44e564fd73c51bd?rik=i8NZ25eXHNRQKQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fcouch-potato-png-hd-couch-potato-13-png-1535.png&ehk=RR9OyPpbuhWMaPD%2fw0a2JiBfDoAfde6r3xYyVxhtN8w%3d&risl=&pid=ImgRaw&r=0' }}
          style={styles.image}
        />

        <Text style={styles.title}>
          COUCH POTATO
        </Text>
        <Text style={styles.description}>

          အာလူးလေးတို့ အတွက် အိမ်မှာနေရင်း 
        </Text>
        <Text style={styles.description}>

          လှုပ်ရှားမှုလေးတွေလုပ်လို့ရနိုင်မဲ့ 
        </Text>
        <Text style={styles.description}>

        Home Workout App
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Agendas')}>
          <Text style={styles.buttonText}> စတင်မည် </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.version}>
          v1.1.0
        </Text>
      </View>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    backgroundColor: '#ebb268',
    paddingTop: 45,
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    marginBottom: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2d2d2d',
  },
  description: {
    fontSize: 16,
    color: '#3d3d3d',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  version: {
    fontSize: 12,
    color: '#2d2d2d',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#ebb268',
  },
  button: {
    padding: 10,
    backgroundColor: 'darkred',
    borderRadius: 30,
    width: 100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;