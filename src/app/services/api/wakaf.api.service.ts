import { useQuery } from '@tanstack/react-query';
import { axiosClient } from '../axios.service';

export const useWakafListQuery = () =>
  useQuery({
    queryKey: ['wakafList'],
    queryFn: () => axiosClient.get('/ws/wakaf/getDataTableWakaf'),
  });
