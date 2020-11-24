import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import { HospitalIndicator } from '../../components/Header';
import InterconsultationScene from '../../scenes/InterconsultationScene';

interface HomeStackScreenProps {
  place: string,
}

const HomeStack = createStackNavigator();

const headerOptions = {
    headerBackTitleStyle: {
      color: "#FFF",
    },
    headerStyle: {
      backgroundColor: '#034B8F',
    },
    headerTitleStyle: {
      color: '#FFF',
      fontFamily: 'Manrope_400Regular',
      fontSize: 11,
    },
    headerTintColor:'#FFF'
};

const HomeStackScreen: React.FC<HomeStackScreenProps> = ({ place }: HomeStackScreenProps) => {
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
      <HomeStack.Screen
        name="Interconsultas"
        component={InterconsultationScene}
        options={{
          ...headerOptions,
        headerRight: () => (<HospitalIndicator place={place} />),
        }}
      />
    </HomeStack.Navigator>
  );
}

const mapStateToProps = (state:any) => {
    return {
      place: state.generalReducer.place.name,
    };
};

export default connect(mapStateToProps, null)(HomeStackScreen);