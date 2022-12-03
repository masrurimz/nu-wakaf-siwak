import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HStack, Icon, IconButton, Text } from 'native-base';
import React from 'react';

const RootStackHeader = (props: NativeStackHeaderProps) => {
  return (
    <HStack bg="white">
      {props.navigation.canGoBack() ? (
        <IconButton
          icon={
            <Icon
              as={MaterialCommunityIcons}
              name="chevron-left"
              size="2xl"
              color="black"
            />
          }
          onPress={props.navigation.goBack}
        />
      ) : null}
      <Text>{props.options.title}</Text>
    </HStack>
  );
};

export default RootStackHeader;
