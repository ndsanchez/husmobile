import React from 'react';
import { Platform, StatusBar, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

const statusBarHeight = Platform.OS === 'android'
  ? StatusBar.currentHeight || (Platform.Version < 23 ? 25 : 24)
  : 0;

interface Props {
  title: string,
  canBack: boolean,
  navigation: any,
  previous?: string
}

const HeaderComponent = ({ title, canBack, navigation, previous  }: any) => (
  <View style={{width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 10000, elevation: 10000}}>
    <View style={{width: '100%', flexDirection: 'row', paddingHorizontal: 25, paddingTop: statusBarHeight + 40, alignItems: 'center'}}>
      <TouchableOpacity onPress={ () => previous ? navigation.navigate(previous) : navigation.goBack() } >
        <Icon name={'chevron-with-circle-left'} type={'entypo'} color={'#FFF'} size={45} style={{display: canBack ? 'flex' : 'none'}} />
      </TouchableOpacity>
      <Text style={{fontFamily: 'Spectral_400Regular', color: '#FFF', fontSize: 25, paddingLeft: 30, fontWeight: 'bold'}}>
        { title }
      </Text>
    </View>
  </View>
);

export default HeaderComponent;
