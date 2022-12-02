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
import { SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </NativeBaseProvider>
      </QueryClientProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
});

const STORYBOOK = IS_STORYBOOK_MODE === 'true';
export default STORYBOOK ? StorybookUIRoot : App;
