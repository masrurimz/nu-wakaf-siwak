import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });

interface QueryClientProviderTestWrapperProps {
  children: React.ReactNode;
}
export const QueryClientProviderTestWrapper = (
  props: QueryClientProviderTestWrapperProps,
) => {
  const { children } = props;

  const testQueryClient = createTestQueryClient();
  return (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
};

export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
}
