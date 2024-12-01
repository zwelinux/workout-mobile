import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';

const AgendaScreen = ({ navigation }) => {
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
            <Text style={styles.headerh1}>Couch Potato</Text>
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
          <Text style={styles.errorText}>တစ်ခုခု မှားနေတယ်နော်။​</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerh1}>Couch Potato</Text>
        <Text style={styles.headerh2}>Beginner Friendly</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>

      <View style={styles.scrollContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {items.map((item, index) => (
            <TouchableOpacity
              style={styles.list}
              key={item.id || index}
              onPress={() => navigation.navigate('Details', { item, items, index })}
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
    backgroundColor: '#ebb268',
    flex: 1,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  header: {
    marginTop: 60,
    alignItems: 'center',
    backgroundColor: '#ebb268',
  },
  headerh1: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  headerh2: {
    fontSize: 20,
    marginBottom: 0,
  },
  loadingText: {
    fontSize: 18,
    marginTop: 20,
    color: 'darkred',
  },
  errorText: {
    fontSize: 18,
    marginTop: 20,
    color: 'red',
    textAlign: 'center',
  },
  scrollContainer: {
    flex: 1,
    marginTop:0,
    marginBottom: 20,
  },
  scrollViewContent: {
    paddingHorizontal: 10,
  },
  list: {
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#efefef',
    marginTop: 15,
    borderRadius: 10,
  },
  listtext: {
    fontSize: 18,
  },
  button: {
    padding: 10,
    backgroundColor: 'darkred',
    borderRadius: 30,
    width: 100,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AgendaScreen;
