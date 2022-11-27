import { NativeBaseProvider } from 'native-base';
import { theme } from '../src/app/config';

export const decorators = [
  Story => (
    <NativeBaseProvider theme={theme}>
      <Story />
    </NativeBaseProvider>
  ),
];
export const parameters = {};
