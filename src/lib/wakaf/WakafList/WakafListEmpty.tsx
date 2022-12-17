import { Heading, Text, VStack } from 'native-base';
import React from 'react';
import EmptyListIllustration from 'src/app/assets/illustrations/EmptyListIllustration.svg';

interface WakafListEmptyProps {
  searchQuery: string;
}

const WakafListEmpty = (props: WakafListEmptyProps) => {
  const { searchQuery } = props;

  const heading = 'Tidak ada data';
  const description = searchQuery
    ? `Pencarian dengan "${searchQuery}" tidak menemukan apapun`
    : 'Tap tombol tambahkan aset untuk menambahkan data';

  return (
    <VStack
      flex={0.7}
      alignItems="center"
      justifyContent="center"
      space={5}
      px={5}>
      <EmptyListIllustration height={200} width={200} />
      <VStack space={2}>
        <Heading textAlign="center">{heading}</Heading>
        <Text textAlign="center">{description}</Text>
      </VStack>
    </VStack>
  );
};

export default WakafListEmpty;
