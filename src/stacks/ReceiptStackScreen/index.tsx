import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import ReceiptScreen from '../../screens/ReceiptScreen';
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
        name="Facturacion"
        component={ReceiptScreen}
        options={{
          header: () => <HeaderComponent title={'Facturación'} canBack={true} navigation={navigation} />
        }}
      />
      {/**
       * 
      <Stack.Screen
        name="Detalle de facturacion"
        component={ReceiptScreen}
        options={{
          header: () => <HeaderComponent title={'Detalle'} canBack={false} />,
        }}
      />
       */}
    </Stack.Navigator>
  );
}

const mapStateToProps = (state:any) => {
    return {
      place: state.generalReducer.place.name,
    };
};

export default connect(mapStateToProps, null)(InterconsultationStackScreen);
