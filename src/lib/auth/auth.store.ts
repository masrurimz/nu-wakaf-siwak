import create from 'zustand';
import { devtools } from 'zustand/middleware';
import EncryptedStorage from 'react-native-encrypted-storage';
import zustandFlipper from 'react-native-flipper-zustand';

interface AuthState {
  isLoading: boolean;
  isLoggedIn: boolean;
  token: string;
  store: (token: string) => Promise<string>;
  restore: () => Promise<string>;
  clear: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    // @ts-ignore
    zustandFlipper(set => ({
      isLoading: false,
      isLoggedIn: false,
      token: '',
      async store(token) {
        set({ isLoading: true });
        await EncryptedStorage.setItem('token', token);

        set({ isLoading: false, token, isLoggedIn: true });

        return token;
      },
      async restore() {
        set({ isLoading: true });
        const token = (await EncryptedStorage.getItem('token')) ?? '';

        set({
          isLoading: false,
          token: token,
        });

        return token;
      },
      async clear() {
        set({ isLoading: false, token: '', isLoggedIn: false });

        const token = await EncryptedStorage.getItem('token');
        if (!token) {
          return;
        }

        await EncryptedStorage.removeItem('token');
      },
    })),
  ),
);
