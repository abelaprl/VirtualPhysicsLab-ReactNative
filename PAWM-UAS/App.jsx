import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import OhmLawScreen from './src/screens/OhmLawScreen';
import './src/firebase';

const Stack = createStackNavigator();

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD7jiVEry9wX_5b4f8GFr96ke8-ZVex4Vw",
  authDomain: "vlabproject-33d46.firebaseapp.com",
  databaseURL: "https://vlabproject-33d46-default-rtdb.firebaseio.com",
  projectId: "vlabproject-33d46",
  storageBucket: "vlabproject-33d46.appspot.com",
  messagingSenderId: "415904434692",
  appId: "1:415904434692:web:26a6e91b396ec069af0351"
};

// Inisialisasi Firebase
//initializeApp(firebaseConfig);

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="OhmLaw" component={OhmLawScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

