import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  LoginScreen,
  RegisterScreen,
  SplashScreen,
  WelcomeScreen,
} from '../../lib/auth';
import { theme } from '../config';
import { useColorModeValue } from 'native-base';

export type RootStackParams = {
  SplashScreen: undefined;
  WelcomeScreen: undefined;
  RegisterScreen: undefined;
  LoginScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

export const RootStackNavigator = () => {
  const rootStackHeaderBgColor = useColorModeValue(
    theme.colors.white,
    theme.colors.dark[50],
  );

  const rootStackHeaderTintColor = useColorModeValue(
    theme.colors.dark[50],
    theme.colors.white,
  );

  return (
    <RootStack.Navigator initialRouteName="LoginScreen">
      <RootStack.Group
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: rootStackHeaderBgColor,
          },
          headerTintColor: rootStackHeaderTintColor,
        }}>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
