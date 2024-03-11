/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Home from './source/Screens/Home';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();
// The player is ready to be used

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
