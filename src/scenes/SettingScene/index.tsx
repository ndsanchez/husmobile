import { Avatar, Button, Divider, Icon, ListItem, Overlay } from 'react-native-elements';
import { Dimensions, Image, Text, View } from 'react-native';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setPlace } from '../../store/actions/generalAction';
import store from '../../store';
import { style } from './style';
import BackgroundComponent from '../../components/BackgroundComponent';
import Constanst from 'expo-constants';
import { breakSession } from './request';

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

const SettingScene = ({ bearer, cenateName, user }: any) => {
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
        
        {/** Screen Background */}
        <BackgroundComponent />

        {/* user circular logo */}
        <View style={{position: 'absolute', top: 125, alignItems: 'center', elevation: 6}} >
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
            top: 190,
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
              <Icon type="font-awesome" name="power-off" size={15} color="#394E99" />
            }
            titleStyle={{color: '#394E99', fontFamily: 'Manrope_400Regular', fontSize: 12, paddingLeft: 10, fontWeight: 'bold'}}
            buttonStyle={ style.logoutBtn }
            title='Cerrar Sesión'
            type="outline"
            onPress={ () => breakSession(bearer) }
          />
          <Text style={{paddingVertical: 10, fontSize: 10, color: '#7C7F84', fontFamily: 'Manrope_400Regular'}}>
            Versión { Constanst.manifest.version }
          </Text>
        </View>

      </View>
    );
};

const mapStateToProps = (state: any) => {
  return {
    bearer: state.loginReducer.login.Bearer,
    cenateName: state.generalReducer.place.name,
    user: state.loginReducer.login.user,
  };
};

export default connect(
  mapStateToProps,
  { setPlace }
  )(SettingScene)
