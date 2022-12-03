import create from 'zustand';
import { devtools } from 'zustand/middleware';
import EncryptedStorage from 'react-native-encrypted-storage';
import zustandFlipper from 'react-native-flipper-zustand';

interface AuthState {
  isLoading: boolean;
  isLoggedIn: boolean;
  token: string;
  store: (
    email: string,
    passwordHashed: string,
    token: string,
  ) => Promise<string>;
  restore: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    // @ts-ignore
    zustandFlipper(set => ({
      isLoading: false,
      isLoggedIn: false,
      token: '',
      async store(_email, _passwordHashed, token) {
        set({ isLoading: true });
        await EncryptedStorage.setItem('token', token);

        set({ isLoading: false, token, isLoggedIn: true });

        return token;
      },
      restore: async () => {
        set({ isLoading: true });
        const token = await EncryptedStorage.getItem('token');

        set({
          isLoading: false,
          token: token ?? '',
        });
      },
    })),
  ),
);
