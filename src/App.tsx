import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Root from './Root';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
