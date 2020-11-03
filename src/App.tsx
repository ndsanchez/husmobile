import React from 'react';
import Loginview from './views/LoginView';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={}>
      <Loginview/>
    </Provider>
  );
}
