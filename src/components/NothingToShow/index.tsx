import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const NothingToShow = () => (
  <View>
    <Icon type='material-community' name='folder-search-outline' color='#CCC' />
    <Text style={{ fontFamily: 'Manrope_400Regular',  color: '#CCC', paddingTop: 10 }} >
      Nada para mostrar
    </Text>
  </View>
);

export default NothingToShow;
