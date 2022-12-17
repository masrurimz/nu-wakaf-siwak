import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Fab,
  FlatList,
  Flex,
  Icon,
  StatusBar,
  useColorModeValue,
} from 'native-base';
import React, { useCallback } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../../../app/config';
import { RootStackParams } from '../../../app/navigation';
import { useWakafListScreen as useWakafListScreenIJ } from './useWakafListScreen';
import WakafListHeader from './WakafListHeader/WakafListHeader';
import AsetWakafListItem from './WakafListItem';

type ScreenProps = NativeStackScreenProps<RootStackParams, 'WakafListScreen'>;
interface WakafListScreenProps extends ScreenProps {
  useWakafListScreen: typeof useWakafListScreenIJ;
}

const WakafListScreen = (props: WakafListScreenProps) => {
  const {
    navigation,
    route,
    useWakafListScreen = useWakafListScreenIJ,
  } = props;

  const { searchQuery, setSearchQuery, wakafList } = useWakafListScreen();

  // TODO: Add skeleton loader

  const openFormWakaf = () => {};

  const renderItem = useCallback(({ item }) => {
    const onPress = () => {
      // dispatch(
      //   setSelectedWakafAset({
      //     DT_RowId: Number(item.DT_RowId),
      //   }),
      // );
      // navigation.navigate('FormAsetWakafScreen');
    };

    return (
      <AsetWakafListItem
        address={item.alamat}
        aiwNumber={item.no_aiw}
        assetNumber={item.DT_RowId}
        onPress={onPress}
        verificationStatus={Number(item.flag)}
        wakif={item.wakif}
      />
    );
  }, []);

  return (
    <Flex flex={1} bg="primary.50" safeAreaTop safeAreaX>
      <StatusBar
        backgroundColor={useColorModeValue(
          theme.colors.primary[50],
          theme.colors.primary[900],
        )}
        barStyle={useColorModeValue('dark-content', 'light-content')}
      />
      <FlatList
        _light={{
          bg: 'primary.50',
          _contentContainerStyle: {
            bg: 'white',
          },
        }}
        _dark={{
          bg: 'primary.900',
          _contentContainerStyle: {
            bg: 'dark.50',
          },
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        _contentContainerStyle={{
          height: '100%',
        }}
        data={[]}
        // keyExtractor={({ DT_RowId }) => DT_RowId}
        renderItem={renderItem}
        ListHeaderComponent={WakafListHeader}
      />
      <Fab
        borderRadius={15}
        renderInPortal={false}
        placement="bottom-right"
        icon={<Icon color="white" as={MaterialCommunityIcons} name="plus" />}
        label="Tambah Aset"
        onPress={openFormWakaf}
      />
    </Flex>
  );
};

export default WakafListScreen;
