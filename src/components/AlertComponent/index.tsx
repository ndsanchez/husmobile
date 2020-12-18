import React from 'react';
import { Button, Dimensions, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import store from '../../store';
import ButtonComponent from '../ButtonComponent';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

interface Props {
  iconColor: string,
  iconName: string,
  iconType: string,
  isVisible: boolean,
  subtitle: string
  title: string,
  btnHandler: () => void
}

const AlertComponent: React.FC<Props> = ({ iconColor, iconName, iconType, isVisible, subtitle, title, btnHandler }: Props) => {

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
          <Icon name={iconName} type={iconType} color={iconColor} size={70} />
          <Text
            style={{
              fontFamily: 'Manrope_400Regular',
              color: '#000',
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            { title }
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope_400Regular',
              color: '#000',
              marginBottom: 20
            }}
          >
            { subtitle }
          </Text>
          <ButtonComponent
            text={'Ok'}
            onPressHandler={btnHandler}
          />
        </View>
      </Modal>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    iconColor: state.generalReducer.alert.iconColor,
    iconName: state.generalReducer.alert.iconName,
    iconType: state.generalReducer.alert.iconType,
    isVisible: state.generalReducer.alert.isVisible,
    subtitle: state.generalReducer.alert.subtitle,
    title: state.generalReducer.alert.title,
    btnHandler: state.generalReducer.alert.btnHandler
  };
};

export default connect(mapStateToProps, null)(AlertComponent);
