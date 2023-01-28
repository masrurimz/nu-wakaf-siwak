import { render } from '@testing-library/react-native';
import React from 'react';
import { NativeBaseProviderTestWrapper } from './NativeBaseProviderTestWrapper';
import { QueryClientProviderTestWrapper } from './QueryClientProviderTestWrapper';

export const renderWithUtils = (children: React.ReactElement) => {
  const { rerender, ...result } = render(
    <QueryClientProviderTestWrapper>
      <NativeBaseProviderTestWrapper>{children}</NativeBaseProviderTestWrapper>
    </QueryClientProviderTestWrapper>,
  );

  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProviderTestWrapper>
          {rerenderUi}
        </QueryClientProviderTestWrapper>,
      ),
  };
};
