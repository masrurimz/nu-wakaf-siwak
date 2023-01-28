import zustandFlipper from 'react-native-flipper-zustand';
import { devtools } from 'zustand/middleware';
import { create } from 'zustand';

interface WakafStore {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useWakafStore = create<WakafStore>()(
  devtools(
    // @ts-ignore
    zustandFlipper(set => ({
      searchQuery: '',
      setSearchQuery: (query: string) => set({ searchQuery: query }),
    })),
  ),
);
