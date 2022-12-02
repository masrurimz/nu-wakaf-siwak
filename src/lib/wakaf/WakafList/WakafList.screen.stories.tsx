import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import WakafListScreen from './WakafList.screen';

export default {
  title: 'lib/auth/WakafListScreen',
  component: WakafListScreen,
} as ComponentMeta<typeof WakafListScreen>;

export const Basic: ComponentStory<typeof WakafListScreen> = () => (
  <WakafListScreen />
);

Basic.args = {};
