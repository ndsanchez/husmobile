import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, ImageBackground, View } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const BackgroundComponent = () => (
  <View style={{position: 'absolute', top: 0, left: 0}}>
    <LinearGradient
      colors={['#394E99', '#162559']}
      style={{
        height: windowHeight / 3,
        width: windowWidth,
        borderBottomLeftRadius: 100,
      }}
    >
      <ImageBackground source={require('../../assets/images/circles.png')} style={{flex: 1}}  >
      </ImageBackground>
    </LinearGradient>
    <View style={{height: 2 * windowHeight / 3, width: windowWidth}} >
    </View>
  </View>
);

export default BackgroundComponent;
