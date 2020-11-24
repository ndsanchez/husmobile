import axios from 'axios';
import store from '../store';

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

const loadResources = () => {
  fetchSpecialities();
};

export { loadResources }
