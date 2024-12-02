import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const UpdatesScreen = () => {
  // Simulating app version and update status
  const currentVersion = "1.0.0";
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(true); // For testing, we can simulate an update
  const [newVersion, setNewVersion] = useState("1.1.2"); // Update this value when a new version is available

  // Google Play Store URL for your app (Replace with your actual app's URL)
  // const playStoreLink = "https://play.google.com/store/apps/details?id=com.yourappname";

    const playStoreLink = "https://play.google.com/store/apps";
  

  const handleUpdateNow = () => {
    Linking.openURL(playStoreLink)
      .catch(err => console.error("Failed to open URL: ", err));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Software Updates</Text>

        {isUpdateAvailable ? (
          <>
            <Text style={styles.paragraph}>
              Current Software Version :  <Text style={styles.highlight}>{newVersion} stable</Text>
            </Text>
            <Text style={styles.instructions}>
              To update, visit the Application store and download the latest version.
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={handleUpdateNow} // Calls the function to open the Play Store
            >
              <Text style={styles.buttonText}>Update Now</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.paragraph}>
              You are currently using version <Text style={styles.highlight}>{currentVersion}</Text>.
            </Text>
            <Text style={styles.instructions}>
              You're up to date! Check back later for new updates.
            </Text>
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
  },
  content: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
    lineHeight: 24,
    textAlign: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#2a9d8f',
  },
  instructions: {
    fontSize: 16,
    color: '#777',
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    width: 300,
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default UpdatesScreen;
