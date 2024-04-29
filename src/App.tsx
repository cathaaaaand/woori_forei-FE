import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import Router from 'shared/Router';

function App() {
  const queryClient = new QueryClient();
  //  console.log(location.origin);
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
