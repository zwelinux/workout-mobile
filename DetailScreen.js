import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';

const DetailScreen = ({ route, navigation }) => {

  const { item, items, index } = route.params;

  const goToNextItem = () => {
    const nextIndex = index + 1;
    if (nextIndex < items.length) {
      const nextItem = items[nextIndex];
      navigation.replace('Details', { item: nextItem, items, index: nextIndex });
    }
  };

  const goToPreviousItem = () => {
    const previousIndex = index - 1;
    if (previousIndex >= 0) {
      const previousItem = items[previousIndex];
      navigation.replace('Details', { item: previousItem, items, index: previousIndex });
    }
  };

  const goToHome= () => {
      navigation.replace('Home');
  };

  // const isLastItem = index === items.length - 1;
  const isFirstItem = index === 0;
  const isLastItem = index === items.length - 1;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerh1}>Couch Potato</Text>
          <Text style={styles.headerh2}>Beginner Friendly</Text>
        </View>

        {/* <Image
          style={styles.image}
          source={{ uri: item.imageUrl }}
        /> */}

        <Image
          source={{ uri: 'https://th.bing.com/th/id/R.3bbace4913a21927a44e564fd73c51bd?rik=i8NZ25eXHNRQKQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fcouch-potato-png-hd-couch-potato-13-png-1535.png&ehk=RR9OyPpbuhWMaPD%2fw0a2JiBfDoAfde6r3xYyVxhtN8w%3d&risl=&pid=ImgRaw&r=0' }}
          style={styles.image}
        />

        <Text style={{ fontSize: 24 }}>{item.title}</Text>
        <Text style={{ marginTop: 20 }}>HELLO FROM THE OTHER SIDE</Text>
        {/* <Text style={{ marginTop: 20 }}>{item.description}</Text> */}

        <View style={styles.footer}>
          {!isFirstItem && (
            <TouchableOpacity style={[styles.button, { marginLeft: 10 }]} onPress={goToPreviousItem}>
              <Text style={styles.buttonText}>Previous</Text>
            </TouchableOpacity>
          )}

          {!isLastItem && (
            <TouchableOpacity style={[styles.button, { marginLeft: 10 }]} onPress={goToNextItem}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          )}
          {isLastItem && (
            <TouchableOpacity style={[styles.button, { marginLeft: 10 }]} onPress={goToHome}>
              <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
          )}
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebb268',
    flex: 1,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  header: {
    backgroundColor: '#ebb268',
  },
  headerh1: {
    marginTop: 30,
    fontSize: 25,
  },
  headerh2: {
    fontSize: 20,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 30,
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

export default DetailScreen;



// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';


// const DetailScreen = ({ route, navigation }) => {
//   const { item } = route.params;
  
//     return (
//         <ScrollView style={styles.container}>
//           <View style={styles.content}>
//             <View style={styles.header}>
//               <Text style={styles.headerh1}>Couch Potato</Text>
//               <Text style={styles.headerh2}>Beginner Friendly</Text>
//             </View>

//             <Text style={{ fontSize: 24 }}>{item.title}</Text>
            
//             <Text style={{ marginTop: 20 }}>{item.description}</Text>

//             <View style={styles.footer}>
//               <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
//                 <Text style={styles.buttonText}> Home </Text>
//               </TouchableOpacity>
//             </View>

//           </View>
//       </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//   background: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'contain',
//   },
//   container: {
//     backgroundColor: '#ebb268',
//     flex: 1,
//   },
//   content: {
//     display: 'flex', 
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 40,
//   },
//   header: {
//     backgroundColor: '#ebb268',
//   },
//   headerh1: {
//     marginTop: 30,
//     fontSize: 25,
//   }, 
//   headerh2: {
//     fontSize: 20,
//     marginBottom: 20,
//   }, 
//   list: {
//     padding: 15,
//     width: '100%',
//     backgroundColor: '#efefef',
//     marginTop: 15,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     borderRadius: 10,
//   },
//   listtext: {
//     fontSize: 18,
//     width: '85%',
//   },
//   footer: {
//     marginTop: 30,
//   },
//   button: {
//     padding: 10,
//     backgroundColor: 'darkred',
//     borderRadius: 30,
//     width: 100,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });

// export default DetailScreen