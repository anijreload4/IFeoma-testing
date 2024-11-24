import React from 'react';
import type { ReactElement } from 'react';

interface Props {
  children: ReactElement | ReactElement[];
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Uncaught error:', error, info);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-white/10 backdrop-blur-md rounded-lg text-white">
          <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
          <p className="text-white/80">Please try refreshing the page</p>
        </div>
      );
    }

    return this.props.children;
  }
}