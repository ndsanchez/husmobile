import { StyleSheet, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');
let box_count = 3;
let box_height = height / box_count;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 30,
    color: '#D9D9D9',
    fontFamily: 'Spectral_400Regular',
  },
  subtitle: {
    fontSize: 10,
    color: '#D9D9D9',
    fontFamily: 'Manrope_400Regular',
    marginBottom: 20,
  },
  input_text: {
    padding: 5,
    marginBottom: 10,
    color: '#FFF',
    borderRadius: 15,
    fontSize: 20,
    width: width/1.5,
  },
  inputStyle: {
    color: '#FFF',
    paddingLeft: 10,
    fontSize: 12,
    fontFamily: 'Manrope_400Regular',
    borderColor: '#FFF'
    
  },
  btnLogin: {
    borderColor: '#FFF',
    borderRadius: 20,
    width: width/1.5,
  },
  btn_label: {
    textTransform: 'capitalize',
    color: '#FAFAFA',
  }
});

export { styles }
