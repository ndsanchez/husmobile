import { AppLoading } from 'expo';
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Manrope_400Regular } from '@expo-google-fonts/manrope';
import { Spectral_400Regular } from '@expo-google-fonts/spectral';
import React from 'react';
import { Text, View, Image  } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { styles } from './style';

export default () => {
  let [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Spectral_400Regular,
  });

  if (!fontsLoaded)
  {
    return <AppLoading />;
  }
  else
  {
    return (
      <View style={styles.container}>
          <LinearGradient
            colors={["#034B8F", '#86CC36']}
            start={[0.4, 0.4]}
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
              
              />
            <Input
              containerStyle={styles.input_text}
              placeholder='Contraseña'
              secureTextEntry={true}
              inputContainerStyle={{borderColor: '#FFF'}}
              inputStyle={styles.inputStyle}
              leftIcon={{ type: 'font-awesome', name: 'lock', color: '#FFF' }}
              placeholderTextColor={'#F8F8F8'}
            />
            <Button
              titleStyle={{color: '#FFF', fontFamily: 'Manrope_400Regular', fontSize: 12}}
              buttonStyle={styles.btnLogin}
              title="Ingresar"
              type="outline"
            />
          </LinearGradient>
      </View>
    );
  }
};
