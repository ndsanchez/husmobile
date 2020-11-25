import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const LoadingIndicator = () => (
  <View style={{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10000
  }}>
    <ActivityIndicator size='large' color='#59AD42' />
  </View>
)

export default LoadingIndicator
