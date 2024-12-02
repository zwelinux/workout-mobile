import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';

const DetailScreen = ({ route, navigation }) => {

  const { item, items, index } = route.params;

  const goToNextItem = () => {
    const nextIndex = index + 1;
    if (nextIndex < items.length) {
      const nextItem = items[nextIndex];
      navigation.replace('Detail', { item: nextItem, items, index: nextIndex });
    }
  };

  const goToPreviousItem = () => {
    const previousIndex = index - 1;
    if (previousIndex >= 0) {
      const previousItem = items[previousIndex];
      navigation.replace('Detail', { item: previousItem, items, index: previousIndex });
    }
  };

  const goToHome = () => {
    navigation.replace('Home');
  };

  const formatTitle = (title, name, maxLength = 25) => {
    const combinedText = [title, name].filter(Boolean).join(' '); // Join only defined values
    return combinedText.length > maxLength ? combinedText.substring(0, maxLength - 3) + '...' : combinedText;
  };

  const isFirstItem = index === 0;
  const isLastItem = index === items.length - 1;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          {/* <Text style={styles.headerh1}>{item.title} {item.name}</Text> */}

          <Text style={styles.headerh1}>
            {formatTitle(item?.title, item?.name)}
          </Text>

        </View>

        <Image
          source={{ uri: 'https://th.bing.com/th/id/R.3bbace4913a21927a44e564fd73c51bd?rik=i8NZ25eXHNRQKQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fcouch-potato-png-hd-couch-potato-13-png-1535.png&ehk=RR9OyPpbuhWMaPD%2fw0a2JiBfDoAfde6r3xYyVxhtN8w%3d&risl=&pid=ImgRaw&r=0' }}
          style={styles.image}
        />

        {/* <Text style={styles.title}>{item.title}</Text> */}
        <Text style={styles.headerh2}>x {item.time} Times</Text>
        {/* <Text style={styles.subtitle}>HELLO FROM THE OTHER SIDE</Text> */}

        <View style={styles.footer}>
          {!isFirstItem && (
            <TouchableOpacity style={[styles.button, { marginRight: 15 }]} onPress={goToPreviousItem}>
              <Text style={styles.buttonText}>Prev</Text>
            </TouchableOpacity>
          )}

          {!isLastItem && (
            <TouchableOpacity style={[styles.button, { marginLeft: 15 }]} onPress={goToNextItem}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          )}
          
          {isLastItem && (
            <TouchableOpacity style={[styles.button, { marginLeft: 15 }]} onPress={goToHome}>
              <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ebb268',
    flex: 1,
    paddingHorizontal: 20,  // Added horizontal padding for better spacing
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,  // Reduced top margin for better alignment
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,  // Added space below the header for separation
  },
  headerh1: {
    fontSize: 25,  // Slightly larger title
    fontWeight: 'bold',
    color: '#2d2d2d',
    marginBottom: 5,
    textAlign: 'center'
  },
  headerh2: {
    fontSize: 25, 
    color: '#3d3d3d',
    fontWeight: 'bold',
    marginBottom: 20,  // Adjusted for proper spacing
  },
  image: {
    width: '100%',
    height: 350,  // Slightly reduced height for better visual balance
    resizeMode: 'contain',  // Ensures the image scales without distortion
    marginBottom: 20,
  },
  title: {
    fontSize: 26,  // Adjusted title font size for a cleaner look
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '600',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,  // Adjusted subtitle size for better readability
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,  // Increased space between content and footer
    width: '100%',
  },
  button: {
    paddingVertical: 12,  // Slightly reduced padding for a more compact button
    paddingHorizontal: 30,
    backgroundColor: 'darkred',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginHorizontal: 10,  // Consistent spacing between buttons
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,  // Slightly reduced font size for balance
    fontWeight: '500',
  },
  buttonPress: {
    backgroundColor: '#b20000',
  }
});



export default DetailScreen;
