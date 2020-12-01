import React from 'react';
import { View, Text, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { Icon, ListItem, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import store from '../../store';
import { LinearGradient } from 'expo-linear-gradient';

const WWidth = Dimensions.get('window').width;

const onPressHandler = (navigation: any, item:any) => {
  store.dispatch({
    type: 'SET_LOADING',
    payload: true
  });

  setTimeout(() => {navigation.navigate(item)}, 1);
};

const HomeScreen = ({ navigation }: any) => {
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
        {/*
          list.map((item, i) => (
            <ListItem key={i} bottomDivider onPress={ () => onPressHandler(navigation, item) }>
              <Icon type={item.type} name={item.icon} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))
          */}
        <ScrollView style={{flex: 1}}>
          <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
            <LinearGradient
              start= {{x: 0.9, y: 0}}
              colors={['#2E226F', '#034B8F', '#02D3E7']}
              style={{
                borderRadius: 15,
                marginBottom: 20,
                backgroundColor: '#FFF',
                shadowColor: '#000',
                shadowOffset: {height: 2, width:0},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}>
              <ImageBackground source={require('../../assets/images/circles.png')} resizeMode='cover' style={{flex:1, justifyContent: 'center'}}>
                <View style={{ backgroundColor: 'transparent', height: 250, width: WWidth-40 }}>
                  <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      <TouchableOpacity onPress={() => {onPressHandler(navigation, 'Interconsultas_feed')}} >
                        <View
                          style={{
                            backgroundColor: '#FAFAFA',
                            borderRadius: 20, shadowColor: '#000',
                            shadowOffset: {height: 2, width:0},
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                            height: 80,
                            width: 80,
                            marginBottom: 10,
                            justifyContent: 'center'
                          }}
                          >
                          <Icon name='solution1' type='antdesign' size={30} color='#686354' />
                        </View>
                      </TouchableOpacity>
                      <Text style={{fontFamily: 'Manrope_400Regular', color: '#FFF', fontSize: 8}}>Interconsultas pendientes</Text>
                    </View>

                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      <TouchableOpacity onPress={() => {onPressHandler(navigation, 'receipt_feed')}} >
                      <View
                        style={{
                          backgroundColor: '#FAFAFA',
                          borderRadius: 20, shadowColor: '#000',
                          shadowOffset: {height: 2, width:0},
                          shadowOpacity: 0.25,
                          shadowRadius: 3.84,
                          elevation: 5,
                          height: 80,
                          width: 80,
                          marginBottom: 10,
                          justifyContent: 'center'
                        }}
                      >
                        <Icon name='receipt' type='material-community' size={30} color='#686354' />
                      </View>
                      </TouchableOpacity>
                      <Text style={{fontFamily: 'Manrope_400Regular', color: '#FFF', fontSize: 9}}>Facturación</Text>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </LinearGradient>
            

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
            </View>
          </View>
        </ScrollView>
      </View>
    );
}

export default HomeScreen;
