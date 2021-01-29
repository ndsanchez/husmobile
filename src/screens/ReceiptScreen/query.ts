import axios from 'axios';
import { session_timeout_alert } from '../../services/indicators';
import store from '../../store';

const UnauthenticatedErrorHandler = (navigation: any) => {
  store.dispatch({ type: 'RESET_RECEIPT_STATE', payload: [] });
  navigation.goBack();
  session_timeout_alert();
  store.dispatch({type: 'SET_LOADING', payload: false});
};

const fetchReceipt = (dateIndicator: number, token: string, navigation: any) => {

  axios.get(`http://172.16.10.150/husapp/api/receipt/${dateIndicator}`, {
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
    switch (err.response.status) {
      case 401:
        UnauthenticatedErrorHandler(navigation);
        break;

      default:
        console.log('otro');
        break;
    }
  });
};

export { fetchReceipt };
