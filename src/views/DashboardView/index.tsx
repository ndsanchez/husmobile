import React from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeView from '../HomeView';
import SettingView from '../SettingView';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const DashboardView = () => {
    return (
      <NavigationContainer>
        <Header
          placement="center"
          leftComponent={{}}
          centerComponent={{ text: 'Hospital Universitario de la Samaritana', style: { color: '#fff' , fontFamily: 'Spectral_400Regular', fontSize:10 } }}
          containerStyle={{ backgroundColor: '#034B8F'}}
        />

        <Tab.Navigator
          initialRouteName="Feed"
          barStyle={{ backgroundColor: '#034B8F'}}
        >
          <Tab.Screen
            name="Feed"
            component={HomeView}
            options={{
              tabBarLabel: 'Inicio',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="layers-outline" color={color} size={24} />
              ),
            }}
          />

          <Tab.Screen
            name="setting"
            component={SettingView}
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
