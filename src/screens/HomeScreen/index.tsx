import React, { useEffect } from 'react';
import { View, Text, Dimensions, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Icon, ListItem, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import store from '../../store';
import { LinearGradient } from 'expo-linear-gradient';

const WWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const onPressHandler = (navigation: any, item:any) => {
  store.dispatch({
    type: 'SET_LOADING',
    payload: true
  });

  setTimeout(() => {navigation.navigate(item)}, 1);
};


const HomeScreen = ({ navigation }: any) => {
  useEffect(() => {
    store.dispatch({type: 'SHOW_PRIMARY_LOADING_INDICATOR', payload: false});
  },[]);

    const list = [
      {
        icon: 'solution1',
        screen: 'Interconsultas_feed',
        title: 'Interconsultas pendientes',
        type: 'antdesign',
      },
      {
        icon: 'receipt',
        screen: 'receipt_feed',
        title: 'Facturación',
        type: 'material-community',
      },
  ];
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>

          {/* Background screeen */}
          <LinearGradient
            colors={['#034B8F', '#034B8F']}
            style={{
              height: windowHeight / 3,
              width: WWidth,
              borderBottomLeftRadius: 100,
            }}
          >
            <ImageBackground source={require('../../assets/images/circles.png')} style={{flex: 1}}  >
            </ImageBackground>
          </LinearGradient>
          <View style={{width: WWidth, height: 2 * windowHeight / 3}}>
          </View>

          {/* title container */}
          <View style={{width: WWidth - 60, left: 30 , top: 30, position: 'absolute'}}>
            <Text style={{fontFamily: 'Spectral_400Regular', color: '#FFF', fontWeight: 'bold', fontSize: 25}}>
              Asistencial
            </Text>
          </View>

          {/* cards container */}
          <View
            style={{
              position: 'absolute',
              backgroundColor: 'transparent',
              elevation: 5,
              height: 2 * windowHeight / 3,
              top: 100,
              left: 20,
              width: WWidth - 40,
            }}
          >
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => {onPressHandler(navigation, 'Interconsultas_feed')}}
                style={{
                  height: 200, 
                  marginVertical: 30,
                  marginHorizontal: 30,
                }}
              >
                <LinearGradient
                  start= {{x: 0.9, y: 0}}
                  colors={['#FFF', '#FFF', '#FFF']} //[#86cc37,'#2E226F', '#034B8F', '#02D3E7']
                  style={{
                    borderRadius: 20, shadowColor: '#000',
                    shadowOffset: {height: 2, width:0},
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    height: 200,
                    width: WWidth / 2 - 60,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Icon name='solution1' type='antdesign' size={80} color='#86cc37' />
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
                    Interconsultas
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

          </View>



            {/* 
          <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
            

            <View
              style={{
                backgroundColor: '#FAFAFA',
                borderRadius: 20, shadowColor: '#000',
                shadowOffset: {height: 2, width:0},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                height: 400,
                width: WWidth-40,
                marginBottom: 20,
              }}
            >
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      
                    </View>
            </View>

          </View>
            */}
        </ScrollView>
      </View>
    );
}

export default HomeScreen;
