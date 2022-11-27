import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginScreen from './Login.screen';

export default {
  title: 'lib/auth/LoginScreen',
  component: LoginScreen,
} as ComponentMeta<typeof LoginScreen>;

export const Basic: ComponentStory<typeof LoginScreen> = () => <LoginScreen />;

Basic.args = {
  text: 'Hello World',
  color: 'purple',
};
