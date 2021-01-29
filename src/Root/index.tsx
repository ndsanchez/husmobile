import { Platform, StatusBar as notificationBar, View } from 'react-native';
import { Manrope_400Regular, useFonts } from '@expo-google-fonts/manrope';
import React, { useEffect, useState } from 'react';
import { setLoading, setPassword, setUsername } from '../store/actions/loginAction';
import { StatusBar } from 'expo-status-bar';
import AlertComponent from '../components/AlertComponent';
import HomeScene from '../scenes/HomeScene';
import { LinearGradient } from "expo-linear-gradient";
import LoadingIndicator from '../components/LoadingIndicator';
import LoginScene from '../scenes/LoginScene';
import NotificationComponent from '../components/NotificationComponent';
import PrimaryLoadingIndicator from '../components/PrimaryLoadingIndicator';
import { Spectral_400Regular } from '@expo-google-fonts/spectral';
import { connect } from 'react-redux';
import { loadResources } from './query';

interface Istate {
    bearer: string,
    isLoading: boolean,
    password: string,
    showUpAlert: boolean,
    username: string
}

const statusBarHeight = Platform.OS === 'android'
  ? notificationBar.currentHeight || (Platform.Version < 23 ? 25 : 24)
  : 0;

const Root = ({ bearer, isLoading, showUpAlert }: Istate) => {
    useEffect(() => {
      bearer && loadResources(bearer)
    }, []);
  
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
          <StatusBar style="light" />
          { showUpAlert && <AlertComponent /> }
          <NotificationComponent />
          <HomeScene />
          { isLoading && (<LoadingIndicator />) }
        </View>
      : (
        <View style={{flex: 1, paddingTop: statusBarHeight}}>
          <StatusBar style="dark" />
          <LoginScene />
        </View>
      )
        
    );
  };

const mapStateToProps = (state:any) => {
  return {
    bearer: state.loginReducer.login.Bearer,
    isLoading: state.generalReducer.isLoading,
    showUpAlert: state.generalReducer.alert.isVisible,
  };
};

export default connect( mapStateToProps, { setUsername, setPassword })(Root)
