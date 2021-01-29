import axios from 'axios';
import store from '../store';
import storage from '../services/asyncStorage';
import { server_error_alert, session_timeout_alert } from '../services/indicators';

const fetchSpecialities = (token: string) => {
    axios.get('http://172.16.10.150/husapp/api/speciality', { headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }})
    .then((response) => {
      store.dispatch({
          type: 'LIST_SPECIALITIES',
          payload: response.data
      });
    })
    .catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            session_timeout_alert()
            break;
        
          default:
            server_error_alert(true)
            break;
        }
      }
    });
};

const fetchGrants = (token: string) => {
  axios.get('http://172.16.10.150/husapp/api/user/grant', { headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  }})
  .then((res) => {
    store.dispatch({ type: 'SET_GRANTS', payload: res.data });
  })
  .catch((error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          session_timeout_alert()
          break;
      
        default:
          server_error_alert(true)
          break;
      }
    }
  });
}

const getCredentialsFromStorage = (token: string) => {
  storage.getData('@access_token').then( (value: string) => {
    store.dispatch({ type: 'SET_TOKEN', payload: value})
    fetchGrants(value)
  })
  .catch( () => {
    
  })

  
}

const loadResources = (token: string) => {
  getCredentialsFromStorage(token)
};

export { loadResources, fetchSpecialities }
