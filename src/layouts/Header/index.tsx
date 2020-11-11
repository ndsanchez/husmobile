import React from 'react';
import { Image, Text, View } from 'react-native';

const HeaderLogo = () => {
    return <Image style={{ width: 30, height: 30 }} source={require('../../assets/images/logo.png')}/>
};

const HeaderTitle = () => {
    return <Text style={{color: '#FFF', alignSelf: 'center'}}>Hospital Universitario de la Samaritana</Text>
};

export { HeaderLogo, HeaderTitle };
