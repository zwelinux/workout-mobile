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
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerh1}>Couch Potato</Text>
            <Text style={styles.headerh2}>Beginner Friendly</Text>
          </View>
          <Text style={styles.loadingText}>Loading, Please Wait...</Text>
          <ActivityIndicator size="large" color="darkred" />
        </View>
      </ScrollView>
    );
  }

  if (error) {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.errorText}>တစ်ခုခု မှားနေတယ်နော်။​</Text>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerh1}>Couch Potato</Text>
          <Text style={styles.headerh2}>Beginner Friendly</Text>
        </View>

        {items.map((item, index) => ( // Add index here
          <View key={item.id}>
            <TouchableOpacity
              style={styles.list}
              onPress={() => navigation.navigate('Details', { item, items, index })} // Pass index as well
            >
              <View style={styles.listtext}>
                <Text>{item.id}+ {item.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

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
    fontWeight: 'bold',
  },
  headerh2: {
    fontSize: 20,
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
    color: 'darkred',
  },
  errorText: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
    color: 'red',
    textAlign: 'center',
  },
  list: {
    padding: 15,
    width: '100%',
    backgroundColor: '#efefef',
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 10,
  },
  listtext: {
    fontSize: 18,
    width: '85%',
  },
  footer: {
    marginTop: 30,
  },
  button: {
    padding: 10,
    backgroundColor: 'darkred',
    borderRadius: 30,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AgendaScreen;



// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';

// const AgendaScreen = ({ navigation }) => {

//     const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       fetch('https://zinny.pythonanywhere.com/api/agendas')
//         .then(response => response.json())
//         .then(data => {
//           setItems(data);
//           setLoading(false);
//         })
//         .catch(err => {
//           setError(err);
//           setLoading(false);
//         });
//     }, []);
  
//     if (loading) {
//       return (
//         <ScrollView style={styles.container}>
//           <View style={styles.content}>
//             <View style={styles.header}>
//               <Text style={styles.headerh1}>Couch Potato</Text>
//               <Text style={styles.headerh2}>Beginner Friendly</Text>
//             </View>

//             <Text>Loadin Please Wait . . . </Text>
//             <ActivityIndicator size={20}></ActivityIndicator>

//           </View>
//       </ScrollView>
//       );
//     }
  
//     if (error) {
//       return <Text>တစ်ခုခု မှားနေတယ်နော်။​</Text>;
//     }
  
//     return (
//         <ScrollView style={styles.container}>
//           <View style={styles.content}>
//             <View style={styles.header}>
//               <Text style={styles.headerh1}>Couch Potato</Text>
//               <Text style={styles.headerh2}>Beginner Friendly</Text>
//             </View>

//               {items.map((item) => (
//                 <View
//                   key={item.id}
//                 >
//                   <TouchableOpacity style={styles.list}  onPress={() => navigation.navigate('Details', { item })}>
//                   <View style={styles.listtext}>
//                     <Text>{item.id} {item.title}</Text>
//                   </View>
//                   </TouchableOpacity>

//                   </View>
//               ))}

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

// export default AgendaScreen

