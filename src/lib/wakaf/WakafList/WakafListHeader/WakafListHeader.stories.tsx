import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import WakafListHeader from './WakafListHeader';

export default {
  title: 'lib/auth/WakafListHeader',
  component: WakafListHeader,
} as ComponentMeta<typeof WakafListHeader>;

export const Basic: ComponentStory<typeof WakafListHeader> = () => (
  <WakafListHeader
    useWakafListHeader={() => ({
      nameFormatted: 'Muhammad Zahid Masruri',
      nameInitial: 'ZM',
      openWakafForm: () => {},
      profile: {
        fullName: 'Muhammad Zahid Masruri',
        initialName: 'ZM',
      },
      handlePressSearch: (query: string) => console.log({ query }),
    })}
  />
);

Basic.args = {};
