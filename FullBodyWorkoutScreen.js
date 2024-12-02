import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';

const FullBodyWorkoutScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://zinny.pythonanywhere.com/api/agendas')
      .then(response => response.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerh1}>Full Body Workout</Text>
            <Text style={styles.headerh2}>Beginner Friendly</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
          <Text style={styles.loadingText}>Loading, Please Wait...</Text>
          <ActivityIndicator size="large" color="darkred" />
        </View>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.errorText}>An error occurred. Please try again.</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerh1}>Full Body Workout</Text>
        <Text style={styles.headerh2}>Beginner Friendly</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {items.map((item, index) => (
            <TouchableOpacity
              style={styles.list}
              key={item.id || index}
              onPress={() => navigation.navigate('Detail', { item, items, index })}
            >
              <Text style={styles.listtext}>{item.id}+ {item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ebb268',
    flex: 1,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  header: {
    marginTop: 30,
    alignItems: 'center',
    // backgroundColor: '#ebb268',
  },
  headerh1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2d2d2d',
  },
  headerh2: {
    fontSize: 16,
    marginBottom: 20,
    color: '#3d3d3d',
  },
  loadingText: {
    fontSize: 16,
    marginTop: 20,
    color: 'darkred',
  },
  errorText: {
    fontSize: 16,
    marginTop: 20,
    color: 'red',
    textAlign: 'center',
  },
  scrollContainer: {
    flex: 1,
    marginTop: 0,
    marginBottom: 20,
  },
  scrollViewContent: {
    paddingHorizontal: 10,
  },
  list: {
    padding: 12,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#efefef',
    marginTop: 15,
    borderRadius: 10,
    borderColor: '#7f7f7f',
    borderWidth: 0.5,
  },
  listtext: {
    fontSize: 16,
  },
  button: {
    backgroundColor: 'black', // Match HomeScreen button color
    padding: 12, // Similar padding as AppInfoScreen button
    width: 300, // Match the width of the buttons in AppInfoScreen
    borderRadius: 10,
    textAlign: 'center',
    marginBottom: 15, // Space between buttons
  },
  buttonText: {
    color: '#fff',
    fontSize: 18, // Font size to match AppInfoScreen button text
    textAlign: 'center',
  },
});

export default FullBodyWorkoutScreen;
