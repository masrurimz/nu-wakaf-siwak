import { useInfiniteQuery } from '@tanstack/react-query';
import { wakafKeys, wakafListQuery } from '../../../app/services/api/wakaf';
import { useWakafStore } from '../wakaf.store';

export const useWakafListScreen = () => {
  const searchQuery = useWakafStore(state => state.searchQuery);

  const infiniteQuery = useInfiniteQuery({
    queryKey: [...wakafKeys.wakafList, searchQuery],
    queryFn: ctx =>
      wakafListQuery({
        search: String(ctx.queryKey[2] ?? ''),
        length: 10,
        start: ctx.pageParam ?? 0,
      }),
  });

  return {
    infiniteQuery,
    searchQuery,
  };
};
