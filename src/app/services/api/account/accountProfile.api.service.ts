import { AccountProfileResponse } from '../../../../common/types/account';
import { axiosClient } from '../../axios.service';

export const accountProfileQuery = () => {
  return axiosClient.post<AccountProfileResponse>('/user/getProfile');
};
