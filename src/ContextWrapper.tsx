import React from 'react';
import { Provider } from 'react-redux';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { store } from '@app/store/store';

const queryClient = new QueryClient();

function ContextWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </QueryClientProvider>
    </Provider>
  );
}

export default ContextWrapper;
