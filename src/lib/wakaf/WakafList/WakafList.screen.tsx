import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Fab,
  FlatList,
  Flex,
  Icon,
  StatusBar,
  useColorModeValue,
} from 'native-base';
import React, { useCallback } from 'react';
import { ListRenderItem } from 'react-native';
import { theme } from '../../../app/config';

import AsetWakafListItem from './WakafListItem';
import WakafListHeader from './WakafListHeader/WakafListHeader';

const WakafListScreen = ({ navigation }: ScreenProps) => {
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
          bg: 'white',
        }}
        _dark={{
          bg: 'dark.50',
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
