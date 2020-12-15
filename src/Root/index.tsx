import React, { useState, useEffect } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Manrope_400Regular } from '@expo-google-fonts/manrope';
import { Spectral_400Regular } from '@expo-google-fonts/spectral';
import { ActivityIndicator, View, Image  } from 'react-native';
import { setUsername, setPassword, setLoading } from '../store/actions/loginAction';
import { connect } from 'react-redux';
import HomeScene from '../scenes/HomeScene';
import LoginScene from '../scenes/LoginScene';
import { loadResources } from './query';
import LoadingIndicator from '../components/LoadingIndicator';
import PrimaryLoadingIndicator from '../components/PrimaryLoadingIndicator';
import NotificationComponent from '../components/NotificationComponent';
import AlertComponent from '../components/AlertComponent';

interface Istate {
    username: string,
    password: string,
    bearer: string,
    isLoading: boolean,
}

const Root = ({ bearer, isLoading }: Istate) => {
    useEffect(() => {

    });
  
    let [fontsLoaded] = useFonts({
      Manrope_400Regular,
      Spectral_400Regular,
    });

    if (!fontsLoaded) {
      return <PrimaryLoadingIndicator />;
    }

    return (
      bearer ?
        <View style={{flex: 1, top: 0, bottom: 0, left: 0, right: 0}} >
          <AlertComponent />
          <NotificationComponent />
          <HomeScene />
          { isLoading && (<LoadingIndicator />) }
        </View>
      : <LoginScene />
    );
  };

const mapStateToProps = (state:any) => {
  return {
    bearer: state.loginReducer.login.Bearer,
    isLoading: state.generalReducer.isLoading,
  };
};

export default connect( mapStateToProps, { setUsername, setPassword })(Root)
