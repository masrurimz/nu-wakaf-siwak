import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParams } from '../../../../app/navigation';
import { useAccountProfileQuery } from '../../../../app/services';

export const useWakafListHeader = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const openWakafForm = () => navigation.navigate('WakafFormScreen');

  const { nameFormatted, nameInitial } = useAccountProfileQuery();

  const openAccountProfile = () => navigation.navigate('AccountProfileScreen');

  return {
    openWakafForm,
    openAccountProfile,
    nameFormatted,
    nameInitial,
  };
};

export type UseWakafListHeader = typeof useWakafListHeader;
