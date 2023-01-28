import {
  Center,
  Flex,
  Icon,
  Pressable,
  Text,
  useColorModeValue,
} from 'native-base';
import { ColorType } from 'native-base/lib/typescript/components/types';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../../../app/config';

interface AccountProfileButtonProps {
  iconName: string;
  title: string;
  onPress: () => any;
  color?: {
    light: ColorType;
    dark: ColorType;
  };
}

const AccountProfileButton = ({
  iconName,
  onPress,
  title,
  color = {
    light: 'primary.600',
    dark: 'primary.400',
  },
}: AccountProfileButtonProps) => {
  const buttonColor = useColorModeValue(color.light, color.dark);

  return (
    <Flex flex={1} rounded={'full'} overflow={'hidden'}>
      <Pressable
        onPress={onPress}
        p={4}
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
        <Center>
          <Icon
            as={MaterialCommunityIcons}
            name={iconName}
            size={'lg'}
            my={2}
            color={buttonColor}
          />
          <Text fontSize={'2xs'} fontWeight={'medium'} color={buttonColor}>
            {title}
          </Text>
        </Center>
      </Pressable>
    </Flex>
  );
};

export default AccountProfileButton;
