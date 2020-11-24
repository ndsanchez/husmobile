import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from 'react-native-elements';
import SettingScene from '../SettingScene';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStackScreen from '../../stacks/HomeStackScreen';

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

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingScene}
        options={{
          ...headerOptions,
          headerTitle: "Hospital Universitario de la Samaritana",
          headerTitleStyle: {...headerOptions.headerTitleStyle, alignSelf: "center"}
        }}
      />
    </SettingsStack.Navigator>
  );
}

const HomeScene = () => {
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
                <Icon name="layers-outline" type="material-community" color={color} size={24} />
              ),
            }}
          />
          <Tab.Screen
            name="setting"
            component={SettingsStackScreen}
            options={{
              tabBarLabel: 'Ajustes',
              tabBarIcon: ({ color }) => (
                <Icon name="account-outline" type="material-community" color={color} size={24} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
};

export default HomeScene;
