import React from 'react';
import { Button, Text, View, Image } from 'react-native';
import { Header, ListItem, Icon } from 'react-native-elements';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeView from '../HomeView';
import SettingsView from '../SettingsView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderLogo, HeaderTitle } from '../../layouts/Header';
import InterconsultationView from '../InterconsultationView';

const headerOptions = {
  headerBackTitleStyle: {
    color: "#FFF",
  },
  headerStyle: {
    backgroundColor: '#034B8F', //#034B8F
  },
  headerTitleStyle: {
    color: '#FFF',
    fontFamily: 'Manrope_400Regular',
    fontSize: 11,
  },
  headerTintColor:'#FFF'
};

const Tab = createMaterialBottomTabNavigator();

function HomeScreen({ navigation }: any) {
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

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Asistencial"
        component={HomeScreen}
        options={{
          ...headerOptions,
          headerTitle: "Hospital Universitario de la Samaritana",
          headerTitleStyle: {...headerOptions.headerTitleStyle, alignSelf: "center"}
        }}
      />
      <HomeStack.Screen name="Interconsultas" component={InterconsultationView} options={headerOptions} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsView}
        options={{
          ...headerOptions,
          headerTitle: "Hospital Universitario de la Samaritana",
          headerTitleStyle: {...headerOptions.headerTitleStyle, alignSelf: "center"}
        }}
      />
    </SettingsStack.Navigator>
  );
}

const DashboardView = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          barStyle={{ backgroundColor: '#FFF'}}
          activeColor="#59AD42"
        >
          <Tab.Screen
            name="Feed"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Inicio',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="layers-outline" color={color} size={24} />
              ),
            }}
          />
          <Tab.Screen
            name="setting"
            component={SettingsStackScreen}
            options={{
              tabBarLabel: 'Ajustes',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account-outline" color={color} size={24} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
};

export default DashboardView;
