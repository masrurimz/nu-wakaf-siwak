import {
  Avatar,
  Divider,
  Heading,
  HStack,
  Pressable,
  Stack,
  Text,
} from 'native-base';
import React from 'react';
import { theme } from '../../../app/config';

export enum WakafVerificationStatus {
  'Not Verified',
  'Verified',
}

interface AsetWakafListItemProps {
  onPress: () => any;
  aiwNumber: string;
  verificationStatus: WakafVerificationStatus;
  assetNumber: string;
  wakif: string;
  address: string;
  name?: string;
}

const AsetWakafListItem: React.FC<AsetWakafListItemProps> = props => {
  const {
    aiwNumber,
    address,
    assetNumber,
    onPress,
    verificationStatus,
    wakif,
    name,
  } = props;

  const isVerified = verificationStatus === WakafVerificationStatus.Verified;

  return (
    <Pressable
      onPress={onPress}
      _dark={{
        _pressed: { bg: 'gray.900', opacity: 0.7 },
        android_ripple: {
          color: theme.colors.primary[800],
        },
      }}
      _light={{
        _pressed: { bg: 'gray.50', opacity: 0.7 },
        android_ripple: {
          color: theme.colors.primary[100],
        },
      }}>
      <Stack px={5}>
        <HStack space={'2'} py={4}>
          <Stack flex={1} space={'0.5'}>
            <HStack alignItems={'center'} space={1.5}>
              <Text fontWeight={'medium'} fontSize={'2xs'} color={'text.400'}>
                {aiwNumber}
              </Text>
              <Divider w={'1px'} h={'100%'} />
              <Text
                fontWeight={'bold'}
                fontSize={'2xs'}
                color={isVerified ? 'primary.500' : 'danger.500'}>
                {isVerified ? 'Diverifikasi' : 'Belum Diverifikasi'}
              </Text>
            </HStack>
            <Heading size={'xs'}>
              {name?.length > 0 ? name : `Aset Wakaf ${assetNumber}`}
            </Heading>
            <Text
              fontWeight={'medium'}
              fontSize={'2xs'}
              numberOfLines={1}
              _light={{
                color: 'text.400',
              }}
              _dark={{
                color: 'text.600',
              }}>
              Wakif: <Text color={'text.500'}>{wakif}</Text>
            </Text>
            <Text
              fontWeight={'medium'}
              fontSize={'2xs'}
              numberOfLines={1}
              _light={{
                color: 'text.400',
              }}
              _dark={{
                color: 'text.600',
              }}>
              Alamat: <Text color={'text.500'}>{address}</Text>
            </Text>
          </Stack>
          <Avatar
            size={'lg'}
            borderRadius={10}
            bg={'emerald.400'}
            _text={{ textAlign: 'center' }}>
            {assetNumber}
          </Avatar>
        </HStack>
        <Divider />
      </Stack>
    </Pressable>
  );
};

export default AsetWakafListItem;
