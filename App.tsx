import { NativeBaseProvider } from 'native-base';
import React from 'react';
// @ts-ignore
import { IS_STORYBOOK_MODE } from '@env';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import StorybookUIRoot from './.storybook/Storybook';
import { theme } from './src/app/config';
import { AppNavigator } from './src/app/navigation';
import { queryClient } from './src/app/services';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};

const STORYBOOK = IS_STORYBOOK_MODE === 'true';
export default STORYBOOK ? StorybookUIRoot : App;
