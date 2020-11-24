import React from 'react';
import { Image, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

interface HospitalIndicatorProps {
  place: string,
}

const HeaderLogo = () => {
    return <Image style={{ width: 30, height: 30 }} source={require('../../assets/images/logo.png')}/>
};

const HeaderTitle = () => {
    return <Text style={{color: '#FFF', alignSelf: 'center'}}>Hospital Universitario de la Samaritana</Text>
};

const HospitalIndicator: React.FC<HospitalIndicatorProps> = ({ place }: HospitalIndicatorProps) => {
    return (
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingRight: 25}}>
        <Icon size={20} name='hospital-o' type='font-awesome' color='#FFF'/>
        <Text style={{fontFamily: 'Manrope_400Regular', fontSize: 11, color: '#FFF', paddingLeft: 5}}>{place}</Text>
      </View>
    );
};

export { HeaderLogo, HeaderTitle, HospitalIndicator };
