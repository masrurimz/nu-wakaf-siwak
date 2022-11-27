import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SplashScreen from './Splash.screen';
// import { NativeBaseProvider } from 'native-base';

export default {
  title: 'lib/auth/SplashScreen',
  component: SplashScreen,
} as ComponentMeta<typeof SplashScreen>;

export const Basic: ComponentStory<typeof SplashScreen> = args => (
  <SplashScreen {...args} />
);

Basic.args = {
  text: 'Hello World',
  color: 'purple',
};
