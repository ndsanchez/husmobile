import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface Props {
  text: string
  onPresshandler: () => void
}

const SolidButton: React.FC<Props> = ({ text, onPresshandler }: Props) => {
  return (
    <View>
      <TouchableOpacity onPress={onPresshandler} >
        <View 
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: '#034B8F',
            borderRadius: 20
          }}
        >
          <Text style={{fontFamily: 'Manrope_400Regular', color: '#FFF'}}>
            { text }
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SolidButton;
