import React, { useEffect } from 'react';
import { View, Text, Dimensions, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Icon, ListItem, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import store from '../../store';
import { LinearGradient } from 'expo-linear-gradient';
import MiniCardComponent from '../../components/MiniCardComponent';
import TitleComponent from '../../components/TitleComponent';

const WWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = ({ navigation }: any) => {
  useEffect(() => {
    store.dispatch({
      type: 'SHOW_PRIMARY_LOADING_INDICATOR',
      payload: false
    });

  },[]);

  const miniCards = [
    {
      title: 'Interconsultas',
      iconName: 'solution1',
      iconType: 'antdesign',
      screenName: 'Interconsultas_feed',
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
        <TitleComponent text={'Asistencial'} />

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
            {
              miniCards.map((item, key) => (
                <View key={key}>
                  <MiniCardComponent attribute={item} navigation={navigation} />
                </View>
              ))
            }
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
