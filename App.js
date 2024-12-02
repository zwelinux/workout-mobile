import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screen components
import HomeScreen from './HomeScreen';
import StartNowScreen from './StartNowScreen';
import AppInfoScreen from './AppInfoScreen'; // New AppInfoScreen import
import FullBodyWorkoutScreen from './FullBodyWorkoutScreen';
import CouchPotatoScreen from './CouchPotatoScreen';
import YogaScreen from './YogaScreen';
import AgendaListScreen from './AgendaListScreen';
import DetailScreen from './DetailScreen';
import PrivacyPolicyScreen from './PrivacyPolicyScreen';
import TermsAndConditionsScreen from './TermsAndConditionsScreen';
import UpdatesScreen from './UpdatesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home Screen as default */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        
        {/* Main Screens */}
        <Stack.Screen
          name="Start Now"
          component={StartNowScreen}
          options={{ headerShown: true }}
        />
        
        {/* Sub-navigation for Start Now */}
        <Stack.Screen
          name="Full Body Workout"
          component={FullBodyWorkoutScreen}
          options={{ headerShown: true }}
        />
        
        <Stack.Screen
          name="Couch Potato"
          component={CouchPotatoScreen}
          options={{ headerShown: true }}
        />
        
        <Stack.Screen
          name="Yoga"
          component={YogaScreen}
          options={{ headerShown: true }}
        />
        
        {/* App Info Screen and its sub-navigation */}
        <Stack.Screen
          name="App Info"
          component={AppInfoScreen} // AppInfoScreen as the main screen for App Info
          options={{ headerShown: true }} // No header for App Info screen
        />
        
        <Stack.Screen
          name="Privacy Policy"
          component={PrivacyPolicyScreen}
          options={{ headerShown: true }}
        />
        
        <Stack.Screen
          name="Terms and Conditions"
          component={TermsAndConditionsScreen}
          options={{ headerShown: true }}
        />
        
        <Stack.Screen
          name="Updates"
          component={UpdatesScreen}
          options={{ headerShown: true }}
        />
        
        {/* Agenda List and Detail Screens */}
        <Stack.Screen
          name="Agenda List"
          component={AgendaListScreen}
          options={{ headerShown: true }}
        />
        
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
