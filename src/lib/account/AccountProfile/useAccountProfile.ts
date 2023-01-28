import { useAccountProfileQuery } from '../../../app/services';
import { useAuthStore } from '../../auth/auth.store';

export const useAccountProfile = () => {
  const { nameFormatted, nameInitial, profile } = useAccountProfileQuery();

  const signOut = useAuthStore(state => state.clear);

  const {
    avatar = '',
    email,
    kab,
    kec,
    kel,
    nama,
    notelp = '',
    prov,
  } = profile.data ?? {};

  return {
    avatar,
    email,
    kab,
    kec,
    kel,
    nama,
    notelp,
    prov,
    nameFormatted,
    nameInitial,
    signOut,
  };
};
