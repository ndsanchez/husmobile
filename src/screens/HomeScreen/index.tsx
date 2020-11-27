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
        <View>
  <Text>Bezier Line Chart</Text>
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
      </View>
    );
}

export default HomeScreen;
