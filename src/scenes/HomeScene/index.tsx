import AdministrativeStack from '../../stacks/AdministrativeStack';
import HomeStackScreen from '../../stacks/HomeStackScreen';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SettingScene from '../SettingScene';
import { connect } from 'react-redux';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

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

interface Props {
  permissions: string[],
}

const HomeScene: React.FC<Props> = ({ permissions }: Props) => {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          barStyle={{ backgroundColor: '#FFF'}}
          activeColor='#86cc37'
        >
          <Tab.Screen
            name="Feed"
            component={ HomeStackScreen }
            options={{
              tabBarLabel: 'Asistencial',
              tabBarIcon: ({ color }) => (
                <Icon name="layers-outline" type="material-community" color={color} size={24} />
              ),
            }}
          />

          {
            permissions.includes('administrative:access') && (
              <Tab.Screen
                name="administrative"
                component={ AdministrativeStack }
                options={{
                  tabBarLabel: 'Administrativa',
                  tabBarIcon: ({ color }) => (
                    <Icon name="grid" type='feather' color={color} size={24} />
                  ),
                }}
              />
            )
          }

          <Tab.Screen
            name="setting"
            component={ SettingsStackScreen }
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

const mapStateToProps = (state: any) => {
  return {
    permissions: state.loginReducer.login.permissions,
  };
};

export default connect(mapStateToProps, null)(HomeScene);
