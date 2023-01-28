import { HStack, Icon, Text, VStack } from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface AccountProfileItemProps {
  iconName?: string;
  label: string;
  value?: string | null;
}

const AccountProfileItem = ({
  iconName,
  label,
  value,
}: AccountProfileItemProps) => {
  return (
    <HStack px={3} py={2} space={3} alignItems={'center'}>
      {iconName && (
        <Icon
          as={MaterialCommunityIcons}
          name={iconName}
          color={'text.500'}
          size={6}
        />
      )}
      <VStack flex={1} space={0.5} ml={!iconName ? 9 : 0}>
        <Text fontSize={'sm'}>{value ?? 'Data kosong'}</Text>
        <Text fontSize={'2xs'} color={'text.500'}>
          {label}
        </Text>
      </VStack>
    </HStack>
  );
};

export default AccountProfileItem;
