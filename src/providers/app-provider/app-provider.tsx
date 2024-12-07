import { AppProviderProps } from './app-provider.types';
import ErrorFallback from './components/error-fallback';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { HashRouter as Router } from 'react-router-dom';

function AppProvider(props: AppProviderProps) {
  const { children } = props;

  return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <Router>{children}</Router>
        </HelmetProvider>
      </ErrorBoundary>
  );
}

export default React.memo(AppProvider);
