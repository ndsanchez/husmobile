import React, { useState, useEffect } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Manrope_400Regular } from '@expo-google-fonts/manrope';
import { Spectral_400Regular } from '@expo-google-fonts/spectral';
import { ActivityIndicator, View, Image  } from 'react-native';
import { setUsername, setPassword, setLoading } from './store/login/action';
import store from './store';
import { connect } from 'react-redux';
import DashboardView from './views/DashboardView';
import LoginView from './views/LoginView';

interface Istate {
    username: string,
    password: string,
    token: string,
    isLoading: boolean,
}

const Root = ({ token, isLoading }: Istate) => {

    useEffect(() => {
      setTimeout(() => {
        store.dispatch(setLoading(false));
      }, 1000);
    });
  
    let [fontsLoaded] = useFonts({
      Manrope_400Regular,
      Spectral_400Regular,
    });
  
    if (!fontsLoaded || isLoading) {
      return (
        <View style={{flex:1,justifyContent:"center", alignItems:'center', backgroundColor: '#034B8F'}}>
          <Image style={{ width: 120, height: 120, marginBottom:40 }} source={require('./assets/images/logo.png')}/>
          <ActivityIndicator size='large' color='#F8F8F8'/>
        </View>
      );
    }
    else if (token !== '') {
      return <DashboardView/>
    }
    else {
      return <LoginView/>
    }
  };
  
  const mapStateToProps = (state:any) => {
    return {
      token: state.loginReducer.login.access_token,
      isLoading: state.loginReducer.isLoading,
    };
  };
  
export default connect(
    mapStateToProps,
    { setUsername, setPassword}
    )(Root)
  