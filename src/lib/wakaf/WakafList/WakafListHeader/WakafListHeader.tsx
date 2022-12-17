import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  PresenceTransition,
  Stack,
  Text,
} from 'native-base';
import React, { useState } from 'react';
import {
  UseWakafListHeader,
  useWakafListHeader as useWakafListHeaderIJ,
} from './useWakafListHeader';

interface WakafListHeaderProps {
  useWakafListHeader: UseWakafListHeader;
  onSearch: (query: string) => void;
}

const WakafListHeader: React.FC<WakafListHeaderProps> = props => {
  const { onSearch, useWakafListHeader = useWakafListHeaderIJ } = props;
  const { openWakafForm, nameFormatted, nameInitial } = useWakafListHeader();

  const [isSearchMode, setIsSearchMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const renderListHeader = () => (
    <HStack px={5} alignItems="center" justifyContent="space-between">
      <Heading size="md">Aset Wakaf NU</Heading>
      <Button
        colorScheme={'secondary'}
        size="md"
        pr="0"
        variant="link"
        rightIcon={<Icon as={MaterialCommunityIcons} name="magnify" />}
        onPress={() => setIsSearchMode(true)}>
        Cari Aset
      </Button>
    </HStack>
  );

  const renderSearchBox = () => (
    <Input
      variant={'filled'}
      rounded="full"
      size={'md'}
      px={0}
      m={2}
      placeholder="Masukkan pencarian"
      InputRightElement={
        <IconButton
          bg="secondary.100"
          py={1}
          px={3}
          m={1.5}
          rounded="full"
          variant="solid"
          onPress={() => onSearch(searchQuery)}
          _icon={{
            as: MaterialCommunityIcons,
            name: 'magnify',
            color: 'secondary.600',
          }}
        />
      }
      InputLeftElement={
        searchQuery.length > 0 ? (
          <IconButton
            onPress={() => setSearchQuery('')}
            py={2}
            _icon={{
              as: MaterialCommunityIcons,
              name: 'close',
            }}
          />
        ) : (
          <IconButton
            onPress={() => setIsSearchMode(false)}
            _icon={{
              as: MaterialCommunityIcons,
              name: 'arrow-left',
            }}
          />
        )
      }
      value={searchQuery}
      onChangeText={setSearchQuery}
    />
  );

  const render = () => (
    <Box _light={{ bg: 'primary.50' }} _dark={{ bg: 'primary.900' }}>
      <Stack space={3} px="5" pb="5">
        <HStack alignItems="center" justifyContent="space-between">
          <Stack>
            <Text fontWeight="medium" fontSize={12} color="text.400">
              Assalamulaikum,
            </Text>
            <Heading size="xs">{nameFormatted}</Heading>
          </Stack>
          <HStack
            _light={{
              bg: 'secondary.100',
            }}
            _dark={{
              bg: 'secondary.800',
            }}
            rounded="full"
            alignItems="center">
            <Button size="xs" variant="link" onPress={() => {}}>
              Akun Saya
            </Button>
            <Avatar
              _light={{
                bg: 'emerald.400',
                borderColor: 'white',
              }}
              _dark={{
                bg: 'emerald.600',
                borderColor: 'dark.50',
              }}
              borderWidth={1}
              size="sm">
              {nameInitial}
            </Avatar>
          </HStack>
        </HStack>
        <Stack space={4} alignItems="flex-start">
          <Heading size="lg">{'Ayo, lengkapi data aset\nwakaf NU'}</Heading>
          <Button onPress={openWakafForm}>Tambah Aset Wakaf</Button>
        </Stack>
      </Stack>
      <Flex
        _light={{
          bg: 'white',
        }}
        _dark={{
          bg: 'dark.50',
        }}
        borderTopRadius={20}
        pt={1}>
        {isSearchMode ? renderSearchBox() : renderListHeader()}
      </Flex>
    </Box>
  );

  return render();
};

export default WakafListHeader;
