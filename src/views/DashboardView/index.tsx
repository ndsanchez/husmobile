import React from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native-elements';

const DashboardView = () => {
    return (
        <View>
        <Header
          placement="left"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Text>Welcome to the Dashboard</Text>
        </View>
    );
};

export default DashboardView;
