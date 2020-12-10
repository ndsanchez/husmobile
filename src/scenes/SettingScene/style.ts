import { StyleSheet, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');

const style = StyleSheet.create({
    btnLogin: {
      borderColor: '#86CC37',
      borderWidth: 2,
      borderRadius: 20,
      paddingHorizontal: 20,
    },
    btn_label: {
      textTransform: 'capitalize',
      color: '#FAFAFA',
    }
  });
  
  export { style }
