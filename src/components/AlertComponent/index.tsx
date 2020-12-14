import React, { useState } from 'react';
import { Button, Dimensions, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import store from '../../store';
import SolidButton from '../SolidButton';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const AlertComponent = () => {

  const [isVisible, setIsVisible] = useState(true);

  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 10,
        justifyContent: 'center'
      }}
    >
      <Modal
        isVisible={isVisible}
        swipeDirection={['left', 'right']}
        animationIn={'flipInX'}
        animationOut={'flipOutX'}
        animationInTiming={1000}
        animationOutTiming={1000}
      >
        <View style={{ backgroundColor: '#FFF', borderRadius: 20, paddingVertical: 30, paddingHorizontal: 30, alignItems: 'center'}}>
          <Icon name={'close-circle'} type={'material-community'} color={'#DE4258'} size={70} />
          <Text
            style={{
              fontFamily: 'Manrope_400Regular',
              color: '#000',
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            { 'Sesion expirada' }
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope_400Regular',
              color: '#000',
              marginBottom: 20
            }}
          >
            { 'Por favor, inicie sesion nuevamente' }
          </Text>
          <SolidButton text={'Ok'} onPresshandler={() => setIsVisible(!isVisible)} />
        </View>
      </Modal>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    background: state.generalReducer.notification.background,
    iconName: state.generalReducer.notification.iconName,
    iconType: state.generalReducer.notification.iconType,
    isVisible: state.generalReducer.notification.isVisible,
  };
};

export default connect(mapStateToProps, null)(AlertComponent);
