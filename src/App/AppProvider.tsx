import React from 'react';
import { Provider } from 'react-redux';
import { store } from '$data/redux.store';
import App from './App';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const AppProvider = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </Provider>
  );
};

export default AppProvider;
