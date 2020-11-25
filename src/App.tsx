import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import Root from './Root';
import store from './store';

export default function App() {

  const statusBarHeight = Platform.OS === 'android'
    ? StatusBar.currentHeight || (Platform.Version < 23 ? 25 : 24)
    : 0;

  return (
    <Provider store={store} >
      <View style={{flex: 1, top: 0, bottom: 0, left: 0, right: 0, paddingTop: statusBarHeight}} >
        <Root />
      </View>
    </Provider>
  );
}
