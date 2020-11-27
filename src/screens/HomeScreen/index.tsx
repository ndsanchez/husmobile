import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Icon, ListItem, Avatar } from 'react-native-elements';
import store from '../../store';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const windowWidth =Dimensions.get('window').width;

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
