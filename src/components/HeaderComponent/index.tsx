import React from 'react';
import { Platform, StatusBar, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const statusBarHeight = Platform.OS === 'android'
  ? StatusBar.currentHeight || (Platform.Version < 23 ? 25 : 24)
  : 0;

const HeaderComponent = ({ title, canBack }: any) => (
  <View style={{width: '100%', position: 'absolute', top: 0, left: 0}}>
    <View style={{width: '100%', flexDirection: 'row', paddingHorizontal: 25, paddingTop: statusBarHeight + 40, alignItems: 'center'}}>
      <Icon name={'chevron-small-left'} type={'entypo'} color={'#FFF'} size={45} style={{display: canBack ? 'flex' : 'none'}} />
      <Text style={{fontFamily: 'Spectral_400Regular', color: '#FFF', fontSize: 25, paddingLeft: 30, fontWeight: 'bold'}}>
        { title }
      </Text>
    </View>
  </View>
);

export default HeaderComponent;
