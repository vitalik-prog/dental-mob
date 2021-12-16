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
          initialRouteName="Patients"
          screenOptions={{
            headerTintColor: '#2A86FF',
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name="Patients"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Patient card"
            component={PatientDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
