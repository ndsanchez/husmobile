import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import store from '../../store';

interface Props {
  background: string,
  iconName: string,
  iconType: string,
  isVisible: boolean,
  text: string,
}

const NotificationComponent: React.FC<Props> = ({ background, iconName, iconType, isVisible, text }: Props) => {

  return (
    <View style={{position: 'absolute', top: 0, left: 0, right: 0, height: 100, elevation: 10}}>
      <Modal
        isVisible={isVisible}
        swipeDirection={['left', 'right']}
        coverScreen={false}
        hasBackdrop={false}
        animationIn={'slideInLeft'}
        animationOut={'slideOutRight'}
        onModalShow={() => {
          setTimeout(() => store.dispatch({
            type: 'DISPLAY_NOTIFICATION',
            payload: {background, iconName, iconType, isVisible: !isVisible, text}
          }), 2000)
        }}
      >
        <View style={{ backgroundColor: background, flex: 1, borderRadius: 20}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 30}}>
            <Icon name={iconName} type={iconType} color={'#FFF'} />
            <Text style={{fontFamily: 'Manrope_400Regular', color: '#FFF', paddingLeft: 10}}>
              { text }
            </Text>
          </View>
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
    text: state.generalReducer.notification.text
  };
};

export default connect(mapStateToProps, null)(NotificationComponent);
