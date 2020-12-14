import axios from 'axios';
import store from '../../store';

const requestTodayReceipt = (dateIndicator: number, bearer: string) => {

  const headers = {
    'Accept': 'application/json',
    'Authorization': 'dgdf'
  };

  axios.get(`http://172.16.10.150/husapp/api/receipt/${dateIndicator}`, { headers: headers })
    .then((response) => {
      store.dispatch({
        type: 'FETCH_TODAY_RECEIPT',
        payload: response.data
      });
      store.dispatch({
        type: 'SET_LOADING',
        payload: false
      });
    })
    .catch(error => {
      switch (error.response.status) {
        case 401:
          console.log('Access denied');
          break;

        default:
          console.log('otro');
          break;
      }
    });
};

export { requestTodayReceipt };
