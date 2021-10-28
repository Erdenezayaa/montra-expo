import React from 'react';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/welcome';
import SignupScreen from '../screens/signup';
import LoginScreen from '../screens/login';
import VerificationScreen from '../screens/verification';

const Stack = createNativeStackNavigator();

const navigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

function OnboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={navigationOptions}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={navigationOptions}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={navigationOptions}
      />
      <Stack.Screen
        name="Verification"
        component={VerificationScreen}
        options={navigationOptions}
      />
    </Stack.Navigator>
  );
}

export default OnboardStack;
