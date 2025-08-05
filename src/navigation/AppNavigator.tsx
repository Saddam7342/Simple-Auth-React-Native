import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import DashboardScreen from '../screens/DashboardScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Dashboard: undefined;
  UserDetails: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: 'grey' },
          title: 'Login Page',
          headerTitleStyle: { color: 'white', fontSize: 24 },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: 'grey' },
          title: 'Login Page',
          headerTitleStyle: { color: 'white', fontSize: 24 },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: 'grey' },
          title: 'Dashboard',
          headerTitleStyle: { color: 'white', fontSize: 24 },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="UserDetails"
        component={UserDetailsScreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: 'grey' },
          title: 'User Details',
          headerTitleStyle: { color: 'white', fontSize: 24 },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
