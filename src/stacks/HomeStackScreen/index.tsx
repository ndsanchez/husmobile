import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import { HospitalIndicator } from '../../components/Header';
import InterconsultationScene from '../../scenes/InterconsultationScene';
import InterconsultationStackScreen from '../InterconsultationStackScreen';
import ReceiptStackScreen from '../ReceiptStackScreen';
import HeaderComponent from '../../components/HeaderComponent';

interface HomeStackScreenProps {
  place: string,
}

const HomeStack = createStackNavigator();

const headerOptions = {
    headerBackTitleStyle: {
      color: "#FFF",
    },
    headerStyle: {
      backgroundColor: 'transparent',
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
          header: () => <HeaderComponent title={'Asistencial'} canBack={false} />
        }}
      />
      <HomeStack.Screen
        name="Interconsultas_feed"
        component={InterconsultationStackScreen}
        options={{ headerShown: false }}
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
