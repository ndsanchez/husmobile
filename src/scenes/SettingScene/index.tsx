import React from 'react';
import { Text, View } from 'react-native';
import { Button, Divider, Icon } from 'react-native-elements';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { style } from './style';
import DropDownPicker from 'react-native-dropdown-picker';
import { setPlace } from '../../store/actions/generalAction';
import store from '../../store';

const SettingScene = ({ place }: any) => {
    return (
      <View style={{flex: 1}}>
        <Divider style={{marginTop: 20, marginBottom: 20}} />
        <View style={{flex: 2, backgroundColor: '#F0F0F0'}}>
          <ListItem key={1} bottomDivider>
              <Avatar rounded icon={{name: 'user', type: 'font-awesome', color: '#59AD42'}} overlayContainerStyle={{backgroundColor: '#F0F0F0'}}/>
              <ListItem.Content>
                <ListItem.Title>{"Neil David Sanchez Quintana"}</ListItem.Title>
                <ListItem.Subtitle>{"sistemas.ingeniero3"}</ListItem.Subtitle>
              </ListItem.Content>
          </ListItem>

          <DropDownPicker
            activeLabelStyle={{color: '#59AD42'}}
            arrowColor="#000"
            items={[
              {label: 'Bogotá', value: '01', icon: () => <Icon size={20} name='hospital-o' type='font-awesome' color='#000' />},
              {label: 'UFZ', value: '02', icon: () => <Icon size={20} name='hospital-o' type='font-awesome' color='#000' />},
              {label: 'Regional', value: '10', icon: () => <Icon size={20} name='hospital-o' type='font-awesome' color='#000' />},
            ]}
            defaultValue={'01'}
            containerStyle={{height:80}}
            style={{backgroundColor: '#FFF', borderColor: '#F0F0F0', paddingLeft: 30}}
            itemStyle={{
              justifyContent: 'flex-start',
              paddingLeft: 40,
              borderColor: '#F0F0F0'
            }}
            labelStyle={{
              color: '#000',
              fontFamily: 'Manrope_400Regular',
              fontSize: 14,
              paddingLeft: 15,
            }}
            dropDownStyle={{backgroundColor: '#FFF', borderColor: '#F0F0F0'}}
            onChangeItem={ item => {store.dispatch(setPlace({'code': item.value, 'name': item.label}))} }
          />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: "center", backgroundColor: '#F0F0F0', paddingBottom: 40}}>
          <Button
            icon={
              <Icon
                type="font-awesome"
                name="power-off"
                size={15}
                color="black"
              />
            }
            titleStyle={{color: '#000', fontFamily: 'Manrope_400Regular', fontSize: 12, paddingLeft: 10}}
            buttonStyle={ style.btnLogin }
            title='Cerrar Sesión'
            type="outline"
            onPress={() => { console.log('logout')}}
          />
          </View>
        </View>
      </View>
    );
};

export default connect(
  null,
  { setPlace }
  )(SettingScene)
