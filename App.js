import React, {useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {HomeScreen, PatientDetailsScreen} from "./screens";
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, [])

  return (
      <NavigationContainer
        theme={navTheme}
      >
        <Stack.Navigator
          initialRouteName="Patients"
          screenOptions={{
            headerTintColor: '#2A86FF',
          }}
        >
          <Stack.Screen
            name="Patients"
            component={HomeScreen}
            options={{ title: 'Patients' }}
          />
          <Stack.Screen
            name="PatientCard"
            component={PatientDetailsScreen}
            options={{ title: 'Patient card' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
