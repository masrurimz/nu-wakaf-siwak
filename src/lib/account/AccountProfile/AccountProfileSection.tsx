import { Text, VStack } from 'native-base';
import React from 'react';

interface AccountProfileSectionProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

const AccountProfileSection = ({
  children,
  title,
}: AccountProfileSectionProps): JSX.Element => {
  return (
    <VStack p={3} space={2} rounded={'lg'} bg={'primary.50'}>
      <Text fontSize={'xs'} fontWeight={'medium'}>
        {title}
      </Text>
      <VStack>{children}</VStack>
    </VStack>
  );
};

export default AccountProfileSection;
