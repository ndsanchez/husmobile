import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return(value);
    }
    return '';
  } catch (err) {
    return '';
  }
}

const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (err) {
    console.log(err)
  }
}

const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (err) {
    console.log(err)
  }
}

export default { getData, removeData, storeData }
