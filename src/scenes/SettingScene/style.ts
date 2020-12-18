import { StyleSheet, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');

const style = StyleSheet.create({
    logoutBtn: {
      borderColor: '#394E99',
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
