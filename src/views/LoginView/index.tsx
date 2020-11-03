import React, { useState, useEffect } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, Image  } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { styles } from './style';
import { setUsername, setPassword } from '../../store/login/action';
import store from '../../store';
import { connect } from 'react-redux';
import { loginRequest } from './query';

interface Istate {
  username: string,
  password: string,
  token: string,
}

const LoginView = ({ username, password }: Istate) => {
    return (
      <View style={styles.container}>
          <LinearGradient
            colors={["#034B8F", '#034B8F']}
            start={[0, 0]}
            style={styles.linearGradient}
          >
            <Image style={styles.logo} source={require('../../assets/images/logo.png')}/>
            <Text style={styles.title} >HUS</Text>
            <Text style={styles.subtitle} >Hospital Universitario de la Samaritana</Text>

            <Input
              placeholder="Usuario"
              leftIcon={{ type: 'font-awesome', name: 'user', color: '#FFF' }}
              containerStyle={styles.input_text}
              inputContainerStyle={{borderColor: '#FFF'}}
              inputStyle={styles.inputStyle}
              placeholderTextColor={'#F8F8F8'}
              onChangeText={value => store.dispatch(setUsername(value))}
              />
            <Input
              containerStyle={styles.input_text}
              placeholder='Contraseña'
              secureTextEntry={true}
              inputContainerStyle={{borderColor: '#FFF'}}
              inputStyle={styles.inputStyle}
              leftIcon={{ type: 'font-awesome', name: 'lock', color: '#FFF' }}
              placeholderTextColor={'#F8F8F8'}
              onChangeText={psw =>  store.dispatch(setPassword(psw))}
            />
            <Button
              titleStyle={{color: '#FFF', fontFamily: 'Manrope_400Regular', fontSize: 12}}
              buttonStyle={ styles.btnLogin }
              title='Ingresar'
              type="outline"
              onPress={() => { loginRequest(username, password)}}
            />
          </LinearGradient>
      </View>
    )
};

const mapStateToProps = (state:any) => {
  return { 
    username: state.loginReducer.username,
    password: state.loginReducer.password,
  };
};

export default connect(
  mapStateToProps,
  { setUsername, setPassword}
  )(LoginView)
