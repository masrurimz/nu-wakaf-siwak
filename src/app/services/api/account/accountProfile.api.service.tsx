import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { AccountProfileResponse } from '../../../../common/types/account';
import { axiosClient } from '../../axios.service';
import { accountKeys } from './accountKeys.api.service';

export const accountProfileQuery = () => {
  return axiosClient.post<AccountProfileResponse>('/user/getProfile');
};

export const useAccountProfileQuery = () => {
  const profile = useQuery({
    queryKey: accountKeys.getProfile,
    queryFn: accountProfileQuery,
    select: data => data.data.data,
  });

  const { nameFormatted, nameInitial } = useMemo(() => {
    const name = profile.data?.nama ?? '';
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
  }, [profile.data]);

  return {
    nameFormatted,
    nameInitial,
    profile,
  };
};
