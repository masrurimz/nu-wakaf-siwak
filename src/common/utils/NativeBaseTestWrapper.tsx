import { NativeBaseProvider } from 'native-base';
import React from 'react';

interface NativeBaseTesstWrapperProps {
  children: React.ReactNode;
}

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

export const NativeBaseTestWrapper = (props: NativeBaseTesstWrapperProps) => {
  const { children } = props;

  return (
    <NativeBaseProvider initialWindowMetrics={inset}>
      {children}
    </NativeBaseProvider>
  );
};
