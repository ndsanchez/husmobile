import React, { useState } from 'react';
import { Dimensions, Image, ImageBackground, Text, View } from 'react-native';
import { Avatar, Button, Card, Divider, Icon, ListItem, Overlay } from 'react-native-elements';
import { connect } from 'react-redux';
import { style } from './style';
import DropDownPicker from 'react-native-dropdown-picker';
import { setPlace } from '../../store/actions/generalAction';
import store from '../../store';
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeigth = Dimensions.get('window').height;

const list = [
  {
    title: 'Centro de atención',
    icon: 'hospital-o',
    iconType: 'font-awesome'
  }
]

const cenate = [
  {
    name: 'Bogotá',
    icon: 'hospital-o',
    iconType: 'font-awesome',
    value: '4'
  },
  {
    name: 'Funcional',
    icon: 'hospital-o',
    iconType: 'font-awesome',
    value: '5'
  },
  {
    name: 'Regional',
    icon: 'hospital-o',
    iconType: 'font-awesome',
    value: '13'
  }
]

const SettingScene = ({ cenateName, user }: any) => {
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
      setVisible(!visible);
    };

    const onPressHandlerCenate = (item: any) => {
      toggleOverlay();
      store.dispatch(setPlace({'code': item.value, 'name': item.name}))
    };

    return (
      <View style={{flex: 1}} >
        {/* user circular logo */}
        <View style={{position: 'absolute', top: 85, alignItems: 'center', elevation: 6}} >
          <View style={{alignItems: 'center', width: windowWidth, height: 40}} >
            <Image style={{width: 125, height: 125}} source={require('../../assets/images/user.png')} />
          </View>
        </View>

        {/* user information container */}
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#FFF',
            borderRadius: 20, shadowColor: '#000',
            shadowOffset: {height: 2, width:0},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            top: 150,
            left: 20,
            height: 350,
            width: windowWidth - 40,
            marginBottom: 10,
          }}
        >
          <View style={{paddingTop: 70, alignItems: 'center'}} >
            <Text style={{fontFamily: 'Manrope_400Regular', fontWeight: 'bold', color: '#686354', fontSize: 17, textTransform: 'capitalize'}} >
              {user.name}
            </Text>
            <Text style={{color: '#7C7F84', fontFamily: 'Manrope_400Regular', fontSize: 11, textTransform: 'lowercase'}} >
              {user.username}
            </Text>
          </View>

          <Divider style={{ backgroundColor: '#CCC', marginVertical: 20 }} />

          {
            list.map((item, i) => (
              <ListItem key={i} bottomDivider onPress={toggleOverlay} >
                <Icon name={item.icon} type={item.iconType} color='#686354' size={30} />
                <ListItem.Content>
                  <ListItem.Title style={{fontFamily: 'Manrope_400Regular', color: '#686354', fontSize: 13, fontWeight: 'bold'}}>
                    {item.title}
                  </ListItem.Title>
                  <ListItem.Subtitle style={{fontFamily: 'Manrope_400Regular', color: '#AAA', fontSize: 10}}>
                    {cenateName}
                  </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            ))
          }
        </View>
        
        {/* Modal to display all choosable atention centers */}
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{width: windowWidth - 40, borderRadius: 20}}>
          <View>
            {
              cenate.map((item, i) => (
                <ListItem key={i} bottomDivider onPress={() => onPressHandlerCenate(item)} >
                  <Icon name={item.icon} type={item.iconType} color='#686354' size={25} />
                  <ListItem.Content>
                    <ListItem.Title style={{fontFamily: 'Manrope_400Regular', color: '#686354', fontSize: 11, fontWeight: 'bold'}}>
                      {item.name}
                    </ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              ))
            }
          </View>
        </Overlay>

        {/* Container for close session button and app version text */}
        <View style={{position: 'absolute', bottom: 30, alignItems: "center", width: windowWidth}} >
          <Button
            icon={
              <Icon type="font-awesome" name="power-off" size={15} color="#86CC37" />
            }
            titleStyle={{color: '#86CC37', fontFamily: 'Manrope_400Regular', fontSize: 12, paddingLeft: 10, fontWeight: 'bold'}}
            buttonStyle={ style.btnLogin }
            title='Cerrar Sesión'
            type="outline"
            onPress={() => { store.dispatch({type: 'LOGOUT', payload: []})}}
          />
          <Text style={{paddingVertical: 10, fontSize: 10, color: '#7C7F84', fontFamily: 'Manrope_400Regular'}}>
            Versión 1.0.0.1
          </Text>
        </View>

        {/* blue background with image */}
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../../assets/images/circles.png')}
            style={{
              flex: 1,
              backgroundColor: '#034B8F',
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}
          >
          </ImageBackground>
        </View>

        {/* gray background */}
        <View style={{flex: 2, alignItems: 'center'}} >
          
        </View>
      </View>
    );
};

const mapStateToProps = (state: any) => {
  return {
    cenateName: state.generalReducer.place.name,
    user: state.loginReducer.login.user,
  };
};

export default connect(
  mapStateToProps,
  { setPlace }
  )(SettingScene)
