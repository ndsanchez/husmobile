import React from 'react';
import { Text } from 'react-native';
import NumberFormat from 'react-number-format';

export default function ReactNativeNumberFormat({value}: any) {
  return (
    <NumberFormat
      value={parseFloat(value)}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
      renderText={formattedValue => <Text>{formattedValue}</Text>} // <--- Don't forget this!
    />
  );
}
