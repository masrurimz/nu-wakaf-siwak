import {
  WakafListParams,
  WakafListResponse,
} from '../../../../common/types/wakaf';
import { axiosClient } from '../../axios.service';

export const wakafListQuery = (params: WakafListParams) => {
  const { length, search, start } = params;

  const data = new FormData();

  length && data.append('length', String(length));
  search && data.append('search', search);
  typeof start !== 'undefined' && data.append('start', String(start));

  data.append('noicon', String(1));

  return axiosClient.post<WakafListResponse>(
    '/ws/wakaf/getDataTableWakaf',
    data,
  );
};
