import { useInfiniteQuery } from '@tanstack/react-query';
import { wakafKeys, wakafListQuery } from '../../../app/services/api/wakaf';
import { useWakafStore } from '../wakaf.store';

export const useWakafListScreen = () => {
  const searchQuery = useWakafStore(state => state.searchQuery);

  const wakafList = useInfiniteQuery({
    queryKey: [...wakafKeys.wakafList, searchQuery],
    queryFn: ({ queryKey }) =>
      wakafListQuery({
        search: String(queryKey[2] ?? ''),
      }),
  });

  return {
    wakafList,
    searchQuery,
  };
};
