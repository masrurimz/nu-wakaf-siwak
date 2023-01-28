import { useNavigation } from '@react-navigation/native';
import { Avatar, HStack, Icon, IconButton, Text } from 'native-base';
import React from 'react';
import { LayoutRectangle, StyleSheet } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AccountProfileScreenNavigationProp } from './AccountProfile.screen';

interface AccountProfileHeaderProps {
  avatar: string;
  avatarLayout: LayoutRectangle;
  name: string;
  nameLayout: LayoutRectangle;
  nameInitial: string;
  scrolling: SharedValue<number>;
}

const AccountProfileHeader = ({
  avatar,
  avatarLayout,
  name,
  nameInitial,
  nameLayout,
  scrolling,
}: AccountProfileHeaderProps) => {
  const navigation = useNavigation<AccountProfileScreenNavigationProp>();

  const avatarStyleAnimated = useAnimatedStyle(() => {
    const { height, y } = avatarLayout;

    const visibility = interpolate(
      scrolling.value,
      [y, y + height],
      [0, 1],
      Extrapolation.CLAMP,
    );

    const scale = interpolate(
      visibility,
      [0, 1],
      [0.6, 1],
      Extrapolation.CLAMP,
    );

    return {
      opacity: visibility,
      transform: [
        {
          scale,
        },
      ],
    };
  });

  const titleStyleAnimated = useAnimatedStyle(() => {
    const { height, y } = nameLayout;

    const visibility = interpolate(
      scrolling.value,
      [y, y + height],
      [0, 1],
      Extrapolation.CLAMP,
    );

    const offset = interpolate(visibility, [0, 1], [5, 0], Extrapolation.CLAMP);

    return {
      opacity: visibility,
      transform: [
        {
          translateY: offset,
        },
      ],
    };
  });

  return (
    <HStack bg={'white'} pt={10} px={1} pb={1} alignItems={'center'} space={2}>
      <IconButton
        onPress={() => navigation.goBack()}
        icon={
          <Icon
            as={MaterialCommunityIcons}
            name={'chevron-left'}
            color={'black'}
            size="2xl"
          />
        }
      />
      <Animated.View style={[styles.title, titleStyleAnimated]}>
        <Text fontSize={'xl'} fontWeight={'medium'}>
          {name}
        </Text>
      </Animated.View>
      <Animated.View style={avatarStyleAnimated}>
        <Avatar mx={2} size={'sm'} source={{ uri: avatar }}>
          {nameInitial}
        </Avatar>
      </Animated.View>
    </HStack>
  );
};

const styles = StyleSheet.create({
  title: {
    flex: 1,
  },
});

export default AccountProfileHeader;
