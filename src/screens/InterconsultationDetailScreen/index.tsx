import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import store from '../../store';

const InterconsultationDetailScreen = () => {

  useEffect(() => {
    store.dispatch({
      type: 'SET_LOADING',
      payload: false
    });
  });

  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Interconsultation Detail</Text>
    </View>
  );
}

export default InterconsultationDetailScreen;
