import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { theme } from '../../../app/config';

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

interface NativeBaseProviderTestWrapperProps {
  children: JSX.Element;
}
export const NativeBaseProviderTestWrapper = (
  props: NativeBaseProviderTestWrapperProps,
) => {
  const { children } = props;

  return (
    <NativeBaseProvider initialWindowMetrics={inset} theme={theme}>
      {children}
    </NativeBaseProvider>
  );
};
