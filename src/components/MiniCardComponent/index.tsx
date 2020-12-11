import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import store from '../../store';

const windowWidth = Dimensions.get('window').width;

interface Props {
  attribute: {
    iconName: string,
    iconType: string,
    title: string,
    screenName: string,
  }
  navigation: any,
}

const onPressHandler = (navigation: any, screen:string) => {
  store.dispatch({
    type: 'SET_LOADING',
    payload: true
  });

  setTimeout(() => { navigation.navigate(screen) }, 1);
};

const MiniCardComponent: React.FC<Props> = ({ attribute, navigation }: Props) => (
  <TouchableOpacity
    onPress={() => {onPressHandler(navigation, attribute.screenName)} }
    style={{
      height: 200, 
      marginTop: 30,
      marginLeft: 30,
    }}
  >
    <LinearGradient
      start= {{x: 0.9, y: 0}}
      colors={['#FFF', '#FFF', '#FFF']}
      style={{
        borderRadius: 20, shadowColor: '#000',
        shadowOffset: {height: 2, width:0},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 200,
        width: windowWidth / 2 - 60,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Icon name={attribute.iconName} type={attribute.iconType} size={80} color='#86cc37' />
      <Text
        style={{
          fontFamily: 'Manrope_400Regular',
          color: '#777',
          fontSize: 11,
          fontWeight: 'bold',
          paddingTop: 20,
          paddingHorizontal: 10,
        }}
      >
        { attribute.title }
      </Text>
    </LinearGradient>
  </TouchableOpacity>
);

export default MiniCardComponent;
