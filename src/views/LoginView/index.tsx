import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Manrope_400Regular } from '@expo-google-fonts/manrope';
import { Spectral_400Regular } from '@expo-google-fonts/spectral';
import { ActivityIndicator, Text, View, Image  } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { styles } from './style';

export default () => {

  const [ isLoading, setIsLoading ] = useState(true);
  let [ username, setUsername ] = useState('');
  let [ password, setPassword ] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  let singUp = () => {
    try {
      axios.post('http://127.0.0.1:8000/api/login', {
        username: username,
        password: password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    } catch (error) {
      
    }
  }

  let [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Spectral_400Regular,
  });

  if (!fontsLoaded || isLoading)
  {
    return (
      <View style={{flex:1,justifyContent:"center", alignItems:'center'}}>
        <ActivityIndicator size='large' color='green'/>
      </View>
    );
  }
  else
  {
    return (
      <View style={styles.container}>
          <LinearGradient
            colors={["#034B8F", '#5B9E62']}
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
              onChangeText={value => setUsername(value)}
              />
            <Input
              containerStyle={styles.input_text}
              placeholder='Contraseña'
              secureTextEntry={true}
              inputContainerStyle={{borderColor: '#FFF'}}
              inputStyle={styles.inputStyle}
              leftIcon={{ type: 'font-awesome', name: 'lock', color: '#FFF' }}
              placeholderTextColor={'#F8F8F8'}
              onChangeText={psw => setPassword(psw)}
            />
            <Button
              titleStyle={{color: '#FFF', fontFamily: 'Manrope_400Regular', fontSize: 12}}
              buttonStyle={ styles.btnLogin }
              title='Usuario'
              type="outline"
              onPress={() => { singUp(); console.log('Button Pressed');}}
            />
          </LinearGradient>
      </View>
    );
  }
};
