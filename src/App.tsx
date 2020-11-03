import React from 'react';
import Loginview from './views/LoginView';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Loginview/>
    </Provider>
  );
}
