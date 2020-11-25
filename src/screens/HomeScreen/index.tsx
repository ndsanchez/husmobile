import React from 'react';
import { View } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import store from '../../store';
import { loadResources } from '../../Root/query';

const onPressHandler = (navigation: any, item:any) => {
  store.dispatch({
    type: 'SET_LOADING',
    payload: true
  });

  setTimeout(() => {navigation.navigate(item.screen)}, 1);
};

const HomeScreen = ({ navigation }: any) => {
    const list = [
      {
        icon: 'solution1',
        screen: 'Interconsultas',
        title: 'Interconsultas pendientes',
        type: 'antdesign',
      },
  ];
    return (
      <View>
        {
          list.map((item, i) => (
            <ListItem key={i} bottomDivider onPress={ () => onPressHandler(navigation, item) }>
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
