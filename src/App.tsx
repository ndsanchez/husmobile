import React from 'react';
import { Platform, View } from 'react-native';
import { Provider } from 'react-redux';
import Root from './Root';
import store from './store';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (
    <Provider store={store} >
      <View style={{flex: 1, top: 0, bottom: 0, left: 0, right: 0}} >
        <StatusBar style="light" />
        <Root />
      </View>
    </Provider>
  );
}
