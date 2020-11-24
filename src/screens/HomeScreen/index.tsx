import React from 'react';
import { View } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';

const HomeScreen = ({ navigation }: any) => {
    const list = [
      {
        icon: 'solution1',
        screen: 'Interconsultas',
        title: 'Interconsultas pendientes',
        type: 'antdesign',
      },
      {
        icon: 'exit-run',
        screen: 'Interconsultas',
        title: 'Egresos',
        type: 'material-community',
      },
  ];
    return (
      <View>
        {
          list.map((item, i) => (
            <ListItem key={i} bottomDivider onPress={() => {navigation.navigate(item.screen)}}>
              <Icon type={item.type} name={item.icon} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))
        }
      </View>
    );
}

export default HomeScreen;
