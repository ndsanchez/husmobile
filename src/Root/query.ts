import axios from 'axios';
import store from '../store';
import storage from '../services/asyncStorage';

const fetchSpecialities = () => {
    axios.get('http://172.16.10.150/husapp/api/speciality')
      .then((response) => {
        console.log('Success', response.data)
        store.dispatch({
            type: 'LIST_SPECIALITIES',
            payload: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
};

const getCredentialsFromStorage = () => {
  storage.getData('@access_token').then( (value: string | undefined) => {
    store.dispatch({ type: 'SET_TOKEN', payload: value })
  })
  .catch( () => {
    
  })
}

const loadResources = () => {
  getCredentialsFromStorage()
};

export { loadResources, fetchSpecialities }
