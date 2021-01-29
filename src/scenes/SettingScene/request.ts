import axios from 'axios';
import { server_error_alert, session_timeout_alert } from '../../services/indicators';
import store from '../../store';
import storage from '../../services/asyncStorage';

const breakSession = (token: string) => {
  store.dispatch({ type: 'SET_LOADING', payload: true })
  storage.removeData('@access_token').then( () => {
    axios.get('http://172.16.10.150/husapp/api/revoke', { headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }})
    .then((res) => {
      store.dispatch({ type: 'SET_LOADING', payload: false })
      store.dispatch({ type: 'RESET_LOGIN_STATE', payload: [] })
    })
    .catch((error) => {
      server_error_alert(true)
      store.dispatch({ type: 'SET_LOADING', payload: false })
    });
  })
}

export { breakSession };
