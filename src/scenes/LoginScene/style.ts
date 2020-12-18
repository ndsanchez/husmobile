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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 110,
    height: 110,
  },
  title: {
    fontSize: 30,
    color: '#686354',
    fontFamily: 'Spectral_400Regular',
  },
  subtitle: {
    fontSize: 10,
    color: '#686354',
    fontFamily: 'Manrope_400Regular',
    marginBottom: 50,
  },
  input_text: {
    width: width - 150,
    marginHorizontal: 0,
    paddingHorizontal: 0,
  },
  inputStyle: {
    paddingHorizontal: 15,
    color: '#686354',
    fontSize: 12,
    fontFamily: 'Manrope_400Regular',
  },
  btnLogin: {
    backgroundColor: '#394E99',
    borderColor: '#394E99',
    borderRadius: 20,
    width: width - 150
  },
  btn_label: {
    textTransform: 'capitalize',
    color: '#FAFAFA',
  }
});

export { styles }
