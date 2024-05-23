import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import { RecoilRoot, RecoilEnv } from 'recoil';
import { OverlayProvider } from './components/Common/Overlay.context';
import Router from 'shared/Router';
function App() {
  const queryClient = new QueryClient();
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
  const clientId = process.env.REACT_GOOGLE_ID || '';
  return (
    <RecoilRoot>
      <GoogleOAuthProvider clientId={clientId}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <OverlayProvider>
            <Router />
          </OverlayProvider>
        </QueryClientProvider>
      </GoogleOAuthProvider>
    </RecoilRoot>
  );
}

export default App;
