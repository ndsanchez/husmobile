import React from 'react';
import { ActivityIndicator, Image, View } from 'react-native';

const PrimaryLoadingIndicator = () => (
  <View
    style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      backgroundColor: '#FFF'}}
    >
    <Image style={{ width: 120, height: 120, marginBottom:40 }} source={require('../../assets/images/shield.png')} />
    <ActivityIndicator size='large' color='#5BAB43' />
  </View>
);

export default PrimaryLoadingIndicator;
