import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';

interface Props {
  iconColor?: string,
  iconName?: string,
  iconType?: string,
  text: string,
  onPressHandler: () => void,
}

const ButtonComponent: React.FC<Props> = ({ iconColor = '#FFF', iconName, iconType, text, onPressHandler }: Props) => {
  return (
    <View>
      <TouchableOpacity onPress={onPressHandler} >
        <View 
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: '#394E99',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#0f2366',
            shadowOffset: {
              width: 100,
              height: 100
            },
            flexDirection: 'row',
            shadowOpacity: 1,
            shadowRadius: 40,
            elevation: 15
          }}
        >
          <Text style={{fontFamily: 'Manrope_400Regular', color: '#FFF'}}>
            { text }
          </Text>
          { iconName && iconType && (<Icon name={iconName} type={iconType} color={iconColor} />) }
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;
