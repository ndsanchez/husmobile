import axios from 'axios';
import { server_error_alert, UnauthenticatedErrorHandler } from '../../services/indicators';
import store from '../../store';

const fetchReceipt = (dateIndicator: number, token: string, navigation: any) => {

  axios.get(`http://husmobile.hus.org.co:8069/huservice/api/receipt/${dateIndicator}`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  })
  .then(res => {
    store.dispatch({ type: 'FETCH_TODAY_RECEIPT', payload: res.data });
    store.dispatch({ type: 'SET_LOADING', payload: false });
  })
  .catch(err => {
    if (err.response) {
      switch (err.response.status) {
        case 401:
          UnauthenticatedErrorHandler(navigation);
          break;
  
        default:
          server_error_alert(true)
          break;
      }
    }
  });
};

export { fetchReceipt };
