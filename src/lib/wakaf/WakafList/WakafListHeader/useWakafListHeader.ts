import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { RootStackParams } from '../../../../app/navigation';
import { accountKeys, accountProfileQuery } from '../../../../app/services';

export const useWakafListHeader = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const openWakafForm = () => navigation.navigate('WakafFormScreen');

  const profile = useQuery({
    queryKey: accountKeys.getProfile,
    queryFn: accountProfileQuery,
  });
  const { nameFormatted, nameInitial } = useMemo(() => {
    const name = profile.data?.data.data?.nama ?? '';
    const word = name
      .split(' ')
      .map(e => e[0]?.toUpperCase() + e.slice(1)?.toLocaleLowerCase());
    const formattedName = word.join(' ');

    const wordFormatted = formattedName.split(' ');
    const initialName =
      wordFormatted.length > 1
        ? word[0][0] + word[word.length - 1][0]
        : word[0][0] + word[0][word[0].length - 1];

    return {
      nameFormatted: formattedName,
      nameInitial: initialName,
    };
  }, [profile.data?.data.data]);

  return {
    openWakafForm,
    nameFormatted,
    nameInitial,
  };
};

export type UseWakafListHeader = typeof useWakafListHeader;
