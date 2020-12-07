import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Text, View, Image  } from 'react-native';
import { Button, Input } from 'react-native-elements';
import InputPasswordToggle from 'react-native-toggle-password-visibility-expo';
import { styles } from './style';
import { setUsername, setPassword } from '../../store/actions/loginAction';
import store from '../../store';
import { connect } from 'react-redux';
import { loginRequest } from './query';
import PrimaryLoadingIndicator from '../../components/PrimaryLoadingIndicator';

const WWidth = Dimensions.get('window').width;

interface Istate {
  username: string,
  password: string,
  loginError: string,
  showPrimaryLoadingIndicator: boolean
}

const LoginView = ({ loginError, password, username, showPrimaryLoadingIndicator }: Istate) => {
    return (
      <View style={styles.container}>
        {showPrimaryLoadingIndicator
        ? <PrimaryLoadingIndicator />
        : (<LinearGradient
          colors={["#034B8F", '#034B8F', '#034B8F']}
          start={[0, 0]}
          style={styles.linearGradient}
        >
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
            <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
            <Text style={styles.title} >
              HUS
            </Text>
            <Text style={styles.subtitle} >
              Hospital Universitario de la Samaritana
            </Text>
          </View>

          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Input
              placeholder="Usuario"
              placeholderTextColor={'#D9D9D9'}
              leftIcon={{ type: 'font-awesome', name: 'user', color: '#FFF' }}
              containerStyle={styles.input_text}
              inputContainerStyle={{borderColor: '#FFF'}}
              inputStyle={styles.inputStyle}
              onChangeText={value => store.dispatch(setUsername(value))}
              errorStyle={{color:'#F8B739', fontWeight: 'bold', fontSize: 9}}
              errorMessage={loginError}
              value={username}
            />
            <View style={{borderBottomWidth: 1, borderBottomColor: '#FFF', marginBottom: 50, width: WWidth - 150, paddingBottom: 10}} >
              <InputPasswordToggle
                placeholder="Contraseña"
                placeholderTextColor={'#D9D9D9'}
                inputStyle={styles.inputStyle}
                icon='lock'
                iconColor='#FFF'
                iconSize={20}
                value={password}
                onChangeText={(psw: string) => store.dispatch({ type: 'SET_PASSWORD', payload: psw })}
              />
            </View>
            <Button
              titleStyle={{color: '#FFF', fontFamily: 'Manrope_400Regular', fontSize: 12}}
              buttonStyle={ styles.btnLogin }
              title='Ingresar'
              type="outline"
              onPress={() => { loginRequest(username, password)}}
            />
          </View>
          </LinearGradient>
          )}
      </View>
    )
};

const mapStateToProps = (state:any) => {
  return {
    username: state.loginReducer.username,
    password: state.loginReducer.password,
    loginError: state.loginReducer.login.error,
    showPrimaryLoadingIndicator: state.loginReducer.showPrimaryLoadingIndicator,
  };
};

export default connect( mapStateToProps, { setUsername, setPassword })(LoginView)
