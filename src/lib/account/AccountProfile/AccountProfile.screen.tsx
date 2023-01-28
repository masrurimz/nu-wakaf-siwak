import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
  Avatar,
  Center,
  HStack,
  Image,
  ScrollView,
  StatusBar,
  Text,
  VStack,
} from 'native-base';
import { phone } from 'phone';
import React, { useMemo, useState } from 'react';
import { LayoutRectangle } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { RootStackParams } from '../../../app/navigation';
import AccountProfileButton from './AccountProfileButton';
import AccountProfileHeader from './AccountProfileHeader';
import AccountProfileItem from './AccountProfileItem';
import AccountProfileSection from './AccountProfileSection';
import { useAccountProfile } from './useAccountProfile';

export type AccountProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParams,
  'AccountProfileScreen'
>;

type AccountProfileScreenProps = NativeStackScreenProps<
  RootStackParams,
  'AccountProfileScreen'
>;

const layoutInitialState: LayoutRectangle = {
  height: 0,
  width: 0,
  x: 0,
  y: 0,
};

const AccountProfileScreen = ({}: AccountProfileScreenProps) => {
  const [avatarLayout, setAvatarLayout] =
    useState<LayoutRectangle>(layoutInitialState);
  const [nameLayout, setNameLayout] =
    useState<LayoutRectangle>(layoutInitialState);
  const scrollViewSnapToOffset = useMemo(() => {
    const avatarOffset = avatarLayout.y + avatarLayout.height;
    const nameOffset = nameLayout.y + nameLayout.height;

    return [avatarOffset, nameOffset];
  }, [avatarLayout.height, avatarLayout.y, nameLayout.height, nameLayout.y]);

  const scrolling = useSharedValue(0);

  const {
    avatar,
    email,
    kab,
    kec,
    kel,
    notelp,
    prov,
    nameFormatted,
    nameInitial,
    signOut,
  } = useAccountProfile();

  return (
    <>
      <StatusBar backgroundColor={'white'} />
      <AccountProfileHeader
        avatar={avatar}
        avatarLayout={avatarLayout}
        name={nameFormatted}
        nameLayout={nameLayout}
        nameInitial={nameInitial}
        scrolling={scrolling}
      />
      <ScrollView
        bg={'white'}
        stickyHeaderIndices={[2]}
        scrollEventThrottle={30}
        onScroll={event => {
          scrolling.value = event.nativeEvent.contentOffset.y;
        }}
        snapToOffsets={scrollViewSnapToOffset}
        // eslint-disable-next-line react-native/no-inline-styles
        _contentContainerStyle={{
          paddingBottom: 5,
        }}>
        <Center
          height={'48'}
          onLayout={e => setAvatarLayout(e.nativeEvent.layout)}>
          <Image
            source={{ uri: avatar }}
            fallbackElement={<Avatar size={'2xl'}>{nameInitial}</Avatar>}
            alt="Foto Kartanu"
            width={'100%'}
            h={'100%'}
            position={'absolute'}
            opacity={30}
          />
        </Center>
        <Text
          onLayout={e => setNameLayout(e.nativeEvent.layout)}
          textAlign={'center'}
          py={3}
          fontSize={'2xl'}
          fontWeight={'medium'}>
          {nameFormatted}
        </Text>
        <HStack
          bg={'white'}
          borderTopWidth={1}
          borderBottomWidth={1}
          borderColor={'primary.50'}
          px={5}
          justifyContent={'space-between'}>
          <AccountProfileButton
            iconName="pencil-outline"
            onPress={() => null}
            title={'Perbarui profil'}
          />
          <AccountProfileButton
            iconName="key-outline"
            onPress={() => {}}
            title={'Ganti Password'}
          />
          <AccountProfileButton
            iconName="logout"
            onPress={signOut}
            title={'Keluar'}
            color={{
              dark: 'danger.400',
              light: 'danger.600',
            }}
          />
        </HStack>
        <VStack p={3} space={3}>
          <AccountProfileSection title="Data Pribadi">
            <AccountProfileItem
              label="Email"
              value={email}
              iconName="email-outline"
            />
            <AccountProfileItem
              label="Nomor Telfon"
              value={phone(notelp).phoneNumber}
              iconName="phone-outline"
            />
          </AccountProfileSection>
          <AccountProfileSection title="Kepengurusan NU">
            <AccountProfileItem
              label="Nomor Kartanu"
              value="12345-6789-102134"
              iconName="card-account-details-outline"
            />
            <AccountProfileItem
              label="Cabang NU"
              value="PCNU Surabaya"
              iconName="domain"
            />
          </AccountProfileSection>
          <AccountProfileSection title="Domisili">
            <AccountProfileItem
              label="Provinsi"
              value={prov}
              iconName="map-marker-outline"
            />
            <AccountProfileItem label="Kabupaten/Kota" value={kab} />
            <AccountProfileItem label="Kecamatan/Distrik" value={kec} />
            <AccountProfileItem label="Kelurahan/Desa" value={kel} />
          </AccountProfileSection>
        </VStack>
      </ScrollView>
    </>
  );
};

export default AccountProfileScreen;
