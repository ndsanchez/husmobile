import React from 'react';
import { Dimensions, View, Text } from 'react-native';

const windowWidth = Dimensions.get('window').width;

interface Props {
  text: string
}

const TitleComponent: React.FC<Props> = ({ text }: Props) => (
  <View style={{width: windowWidth - 60, left: 30 , top: 30, position: 'absolute'}}>
    <Text style={{fontFamily: 'Spectral_400Regular', color: '#FFF', fontWeight: 'bold', fontSize: 25}}>
      { text }
    </Text>
  </View>
);

export default TitleComponent;
