import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import WakafListItem, { WakafVerificationStatus } from './WakafListItem';

export default {
  title: 'lib/auth/WakafListItem',
  component: WakafListItem,
} as ComponentMeta<typeof WakafListItem>;

export const Verified: ComponentStory<typeof WakafListItem> = () => (
  <WakafListItem
    address="Jl. Arief Rahman Hakim No. 99 Keputih, Sukolilo, Surabaya"
    aiwNumber="B.443/KUA.13.10.02/W2/IV/2020"
    assetNumber="1926"
    onPress={() => {}}
    verificationStatus={WakafVerificationStatus.Verified}
    wakif="Siti Hindun, Kulatin Hamroh, Mu'arah"
  />
);

export const NotVerified: ComponentStory<typeof WakafListItem> = () => (
  <WakafListItem
    address="Jl. Arief Rahman Hakim No. 99 Keputih, Sukolilo, Surabaya"
    aiwNumber="B.443/KUA.13.10.02/W2/IV/2020"
    assetNumber="1926"
    onPress={() => {}}
    verificationStatus={WakafVerificationStatus['Not Verified']}
    wakif="Siti Hindun, Kulatin Hamroh, Mu'arah"
  />
);

export const WithName: ComponentStory<typeof WakafListItem> = () => (
  <WakafListItem
    address="Jl. Arief Rahman Hakim No. 99 Keputih, Sukolilo, Surabaya"
    aiwNumber="B.443/KUA.13.10.02/W2/IV/2020"
    assetNumber="1926"
    onPress={() => {}}
    verificationStatus={WakafVerificationStatus['Not Verified']}
    wakif="Siti Hindun, Kulatin Hamroh, Mu'arah"
    name="Masjid Assa'adah"
  />
);

Verified.args = {};
