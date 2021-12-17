import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {HomeScreen, PatientDetailsScreen} from "./screens";

const Stack = createNativeStackNavigator();
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

export default function App() {

  return (
      <NavigationContainer
        theme={navTheme}
      >
        <Stack.Navigator
          initialRouteName="PatientCard"
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
