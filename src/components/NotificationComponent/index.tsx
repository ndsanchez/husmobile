import React, { useState } from 'react';
import { Dimensions, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modal';

const windowWidth = Dimensions.get('window').width;

export default function ExceptionComponent() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <View style={{position: 'absolute', top: 0, left: 0, right: 0, height: 100}}>
      <Modal
        isVisible={isVisible}
        swipeDirection={['left', 'right']}
        coverScreen={false}
        hasBackdrop={false}
        animationIn={'slideInLeft'}
        onSwipeComplete={()=> setIsVisible(!isVisible)}
      >
        <View style={{ backgroundColor: '#DE4258', flex: 1, borderRadius: 20}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 30}}>
            <Icon name={'hand-stop-o'} type={'font-awesome'} color={'#FFF'} />
            <Text style={{fontFamily: 'Manrope_400Regular', color: '#FFF', paddingLeft: 10}}>
              ¡Acceso denegado!
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};
