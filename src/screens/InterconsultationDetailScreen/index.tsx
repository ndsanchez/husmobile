import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import store from '../../store';

const InterconsultationDetailScreen = ({ navigation, route }: any) => {

  const { item } = route.params;

  useEffect(() => {
    store.dispatch({
      type: 'SET_LOADING',
      payload: false
    });
  });

  const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
  ]

  return (
    <View>
      <ListItem key={1} bottomDivider>
        <Avatar rounded icon={{name: 'user', type: 'font-awesome', color: '#59AD42'}} overlayContainerStyle={{backgroundColor: '#F0F0F0'}}/>
        <ListItem.Content>
          <ListItem.Title>{item.NOMBRE}</ListItem.Title>
          <ListItem.Subtitle>{item.HISTORIA}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
}

export default InterconsultationDetailScreen;
