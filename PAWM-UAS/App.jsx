import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { ScrollView } from 'react-native';
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import OhmLawScreen from './src/screens/OhmLawScreen';
import QuizScreen from './src/screens/QuizScreen';
import './src/firebase';

const Stack = createStackNavigator();

const ScrollableScreen = ({ children }) => (
  <ScrollView contentContainerStyle={{ flexGrow: 1}}>
    {children}
  </ScrollView>
);

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen 
            name="Auth" 
            component={AuthScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home">
            {(props) => (
              <ScrollableScreen>
                <HomeScreen {...props} />
              </ScrollableScreen>
            )}
          </Stack.Screen>
          <Stack.Screen name="OhmLaw">
            {(props) => (
              <ScrollableScreen>
                <OhmLawScreen {...props} />
              </ScrollableScreen>
            )}
          </Stack.Screen>
          <Stack.Screen 
            name="Quiz" 
            options={{ title: 'Latihan Soal' }}
          >
            {(props) => (
              <ScrollableScreen>
                <QuizScreen {...props} />
              </ScrollableScreen>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}