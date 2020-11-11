import { StyleSheet, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');

const style = StyleSheet.create({
    btnLogin: {
      borderColor: '#000',
      borderRadius: 20,
      width: width/1.8,
    },
    btn_label: {
      textTransform: 'capitalize',
      color: '#FAFAFA',
    }
  });
  
  export { style }
