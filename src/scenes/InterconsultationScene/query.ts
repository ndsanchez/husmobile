import axios from 'axios';
import { server_error_alert, UnauthenticatedErrorHandler } from '../../services/indicators';
import store from '../../store';

const fetchInterconsultation = (token:string , OIDCENATE: number, OIDESPECI: number, navigation: any) => {
    store.dispatch({ type: 'SET_LOADING', payload: true });
    axios.get(`http://husmobile.hus.org.co:8069/huservice/api/interconsultation/${OIDCENATE}/${OIDESPECI}`, { headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }})
    .then((response) => {
      store.dispatch({ type: 'SET_LOADING', payload: false });
      if (response.data) {
        store.dispatch({
          type: 'LIST_INTERCONSULTATIONS',
          payload: response.data
        });
      }
      else {
        store.dispatch({
          type: 'LIST_INTERCONSULTATIONS',
          payload: []
        });
      }
    })
    .catch((err) => {
      store.dispatch({ type: 'SET_LOADING', payload: false });
      if (err.response) {
        switch (err.response.status) {
          case 401:
            UnauthenticatedErrorHandler(navigation);
            break;
    
          default:
            server_error_alert(false)
            break;
        }
      }
    });
};

export { fetchInterconsultation };
