import axios from 'axios';
import { server_error_alert, UnauthenticatedErrorHandler } from '../../services/indicators';
import store from '../../store';

const fetchInterconsultation = (token:string , OIDCENATE: number, OIDESPECI: number, navigation: any) => {
    //store.dispatch(setLoading(true));
    axios.get(`http://172.16.10.150/husapp/api/interconsultation/${OIDCENATE}/${OIDESPECI}`, { headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }})
    .then((response) => {
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
