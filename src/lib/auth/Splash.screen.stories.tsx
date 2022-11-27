import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SplashScreen from './Splash.screen';

export default {
  title: 'lib/auth/SplashScreen',
  component: SplashScreen,
} as ComponentMeta<typeof SplashScreen>;

export const Basic: ComponentStory<typeof SplashScreen> = () => (
  <SplashScreen />
);

Basic.args = {
  text: 'Hello World',
  color: 'purple',
};
