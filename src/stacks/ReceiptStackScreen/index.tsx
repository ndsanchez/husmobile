import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { HospitalIndicator } from '../../components/Header';
import InterconsultationScene from '../../scenes/InterconsultationScene';
import InterconsultationDetailScreen from '../../screens/InterconsultationDetailScreen';
import ReceiptScreen from '../../screens/ReceiptScreen';

interface HomeStackScreenProps {
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

const InterconsultationStackScreen: React.FC<HomeStackScreenProps> = ({ place }: HomeStackScreenProps) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Facturacion"
        component={ReceiptScreen}
        options={{
          ...headerOptions,
        headerRight: () => (<HospitalIndicator place={place} />),
        }}
      />
      <Stack.Screen
        name="Detalle de facturacion"
        component={ReceiptScreen}
        options={{
          ...headerOptions,
        headerRight: () => (<HospitalIndicator place={place} />),
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
