import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { HospitalIndicator } from '../../components/Header';
import InterconsultationScene from '../../scenes/InterconsultationScene';
import InterconsultationDetailScreen from '../../screens/InterconsultationDetailScreen';
import HeaderComponent from '../../components/HeaderComponent';

interface HomeStackScreenProps {
  place: string,
  navigation: any
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

const InterconsultationStackScreen: React.FC<HomeStackScreenProps> = ({ place, navigation }: HomeStackScreenProps) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Interconsultas"
        component={InterconsultationScene}
        options={{
          header: () =>
            <HeaderComponent title={'Interconsultas'} resetState="RESET_ASSISTANCE_STATE" canBack={true} navigation={navigation} />
        }}
      />
      <Stack.Screen
        name="Detalle de Interconsulta"
        component={InterconsultationDetailScreen}
        options={{
          header: () => (
            <HeaderComponent
              title={'Datos interconsulta'}
              canBack={true}
              navigation={navigation}
              previous={'Interconsultas'} />
          )
        }}
      />
    </Stack.Navigator>
  );
}

const mapStateToProps = (state:any) => {
    return {
      place: state.generalReducer.place.name,
    };
};

export default connect(mapStateToProps, null)(InterconsultationStackScreen);
