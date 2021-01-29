import React from 'react';
import { Platform, StatusBar, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements';
import store from '../../store';

const statusBarHeight = Platform.OS === 'android'
  ? StatusBar.currentHeight || (Platform.Version < 23 ? 25 : 24)
  : 0;

interface Props {
  canBack: boolean,
  navigation: any,
  previous?: string
  resetState?: string,
  title: string,
}


const HeaderComponent: React.FC<Props> = ({ canBack, navigation, previous, resetState, title }: Props) => {
  const goBackHandle = () => {
    resetState && store.dispatch({ type: resetState, payload: [] });
    previous ? navigation.navigate(previous) : navigation.goBack();
  }

  return (
    <View style={{width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 10000, elevation: 10000}}>
      <View style={{width: '100%', flexDirection: 'row', paddingHorizontal: 25, paddingTop: statusBarHeight + 40, alignItems: 'center'}}>
        <TouchableOpacity onPress={goBackHandle} >
          <Icon name={'chevron-with-circle-left'} type={'entypo'} color={'#FFF'} size={45} style={{display: canBack ? 'flex' : 'none'}} />
        </TouchableOpacity>
        <Text style={{fontFamily: 'Spectral_400Regular', color: '#FFF', fontSize: 25, paddingLeft: 30, fontWeight: 'bold'}}>
          { title }
        </Text>
      </View>
    </View>
  );
}

export default HeaderComponent;
