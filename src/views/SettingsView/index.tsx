import React from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { style } from './style';

export default ({ navigation }: any) => {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#FAFAFA'}}>
          <ListItem key={1} bottomDivider>
              <Avatar rounded icon={{name: 'user', type: 'font-awesome', color: '#59AD42'}} overlayContainerStyle={{backgroundColor: '#F0F0F0'}}/>
              <ListItem.Content>
                <ListItem.Title>{"Neil David Sanchez Quintana"}</ListItem.Title>
                <ListItem.Subtitle>{"sistemas.ingeniero3"}</ListItem.Subtitle>
              </ListItem.Content>
          </ListItem>
        </View>
        <View style={{ flex: 2 }}>
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: "center", backgroundColor: '#FAFAFA', paddingBottom: 40}}>
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
