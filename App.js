import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from ' react-redux';

import Main from './src/Main';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
