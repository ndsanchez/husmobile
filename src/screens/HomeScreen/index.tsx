import React, { useEffect } from 'react';
import { Dimensions, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import store from '../../store';
import BackgroundComponent from '../../components/BackgroundComponent';
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
        <BackgroundComponent />

        {/* cards container */}
        <View
          style={{
            backgroundColor: 'transparent',
            elevation: 5,
            height: 2 * windowHeight / 3,
            top: 150,
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
