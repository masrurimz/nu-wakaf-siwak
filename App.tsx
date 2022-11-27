import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider } from 'native-base';
// @ts-ignore
import { IS_STORYBOOK_MODE } from '@env';
import { SplashScreen } from './src/lib/auth';
import StorybookUIRoot from './.storybook/Storybook';

const App = () => {
  return (
    <NativeBaseProvider>
      <SplashScreen />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const STORYBOOK = IS_STORYBOOK_MODE === 'true';
export default STORYBOOK ? StorybookUIRoot : App;
