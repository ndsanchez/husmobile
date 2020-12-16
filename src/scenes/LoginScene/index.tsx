import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet, Text, View, Image, ImageBackground  } from 'react-native';
import { Button, Input } from 'react-native-elements';
import InputPasswordToggle from 'react-native-toggle-password-visibility-expo';
import { styles } from './style';
import { setUsername, setPassword } from '../../store/actions/loginAction';
import store from '../../store';
import { connect } from 'react-redux';
import { loginRequest } from './query';
import PrimaryLoadingIndicator from '../../components/PrimaryLoadingIndicator';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const colors = {
  green: '#5bab43',
  purple: '#3c4b9b',
}

interface Istate {
  username: string,
  password: string,
  loginError: string,
  showPrimaryLoadingIndicator: boolean
}

const LoginView = ({ loginError, password, username, showPrimaryLoadingIndicator }: Istate) => {
    return (
      <View style={styles.container}>

<View style={style.container}>

<View style={style.triangleCorner}></View>
 <View style={style.triangleCorner1}></View>

</View>

        {
          showPrimaryLoadingIndicator
          ? <PrimaryLoadingIndicator />
          : <View
            style={styles.linearGradient}
          >

            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <View style={{backgroundColor: '#FFF', borderRadius: 200, padding: 3}}>
                <Image style={styles.logo} source={require('../../assets/images/shield.png')} />
              </View>
              <Text style={styles.title} >
                HUS
              </Text>
              <Text style={styles.subtitle} >
                Hospital Universitario de la Samaritana
              </Text>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <Input
                placeholder="Usuario"
                placeholderTextColor={'#686354'}
                leftIcon={{ type: 'font-awesome', name: 'user', color: '#686354' }}
                containerStyle={styles.input_text}
                inputContainerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: 30, paddingHorizontal: 20}}
                inputStyle={styles.inputStyle}
                onChangeText={value => store.dispatch(setUsername(value))}
                errorStyle={{color:'#F8B739', fontWeight: 'bold', fontSize: 9}}
                errorMessage={loginError}
                value={username}
              />
              <View
                style={{
                  marginBottom: 50,
                  width: windowWidth - 150,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: 30,
                }}
              >
                <InputPasswordToggle
                  placeholder="Contraseña"
                  placeholderTextColor={'#686354'}
                  inputStyle={styles.inputStyle}
                  icon='lock'
                  iconColor={'#686354'}
                  iconSize={20}
                  value={password}
                  onChangeText={(psw: string) => store.dispatch({ type: 'SET_PASSWORD', payload: psw })}
                />
              </View>
              <Button
                titleStyle={{color: '#FFF', fontFamily: 'Manrope_400Regular', fontSize: 12, fontWeight: 'bold'}}
                buttonStyle={ styles.btnLogin }
                title='Ingresar'
                type="outline"
                onPress={() => { loginRequest(username, password)}}
              />
            </View>
            
          </View>
        }
      </View>
    )
};

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 100,
    width: windowWidth,
    top: 0,
    backgroundColor: 'transparent',
  },triangleCorner1: {
    position: 'absolute',
    top: 0,
    right:0,
    width: windowWidth,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 30,
    borderTopWidth: 20,
    borderLeftColor: 'transparent',
    borderTopColor: '#394E99'
  },triangleCorner: {
    position: 'absolute',
    top: 20,
    right:0,
    width: windowWidth - 100,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 30,
    borderTopWidth: 20,
    borderLeftColor: 'transparent',
    borderTopColor: '#5bab43'
  }
});

const mapStateToProps = (state:any) => {
  return {
    username: state.loginReducer.username,
    password: state.loginReducer.password,
    loginError: state.loginReducer.login.error,
    showPrimaryLoadingIndicator: state.loginReducer.showPrimaryLoadingIndicator,
  };
};

export default connect( mapStateToProps, { setUsername, setPassword })(LoginView)
