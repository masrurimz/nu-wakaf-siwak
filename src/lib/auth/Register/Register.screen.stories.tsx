import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RegisterScreen from './Register.screen';

export default {
  title: 'lib/auth/RegisterScreen',
  component: RegisterScreen,
} as ComponentMeta<typeof RegisterScreen>;

export const Basic: ComponentStory<typeof RegisterScreen> = () => (
  <RegisterScreen />
);

Basic.args = {
  text: 'Hello World',
  color: 'purple',
};
