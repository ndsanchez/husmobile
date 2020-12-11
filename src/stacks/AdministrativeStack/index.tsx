import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/Administrative/HomeScreen';
import InterconsultationStackScreen from '../InterconsultationStackScreen';
import ReceiptStackScreen from '../ReceiptStackScreen';

interface AdministrativeStackProps {
  place: string,
}

const Stack = createStackNavigator();

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

const AdministrativeStack: React.FC<AdministrativeStackProps> = ({ place }: AdministrativeStackProps) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Administrativa"
        component={HomeScreen}
        options={{
          ...headerOptions,
          headerTitle: "Hospital Universitario de la Samaritana",
          headerTitleStyle: {...headerOptions.headerTitleStyle, alignSelf: "center"}
        }}
      />
      <Stack.Screen
        name="receipt_feed"
        component={ReceiptStackScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const mapStateToProps = (state:any) => {
    return {
      place: state.generalReducer.place.name,
    };
};

export default connect(mapStateToProps, null)(AdministrativeStack);
