import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import WelcomeScreen from './Welcome.screen';

export default {
  title: 'lib/auth/WelcomeScreen',
  component: WelcomeScreen,
} as ComponentMeta<typeof WelcomeScreen>;

export const Basic: ComponentStory<typeof WelcomeScreen> = () => (
  <WelcomeScreen />
);

Basic.args = {
  text: 'Hello World',
  color: 'purple',
};
