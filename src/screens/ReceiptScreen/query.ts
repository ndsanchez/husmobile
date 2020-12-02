import axios from 'axios';
import store from '../../store';

const requestTodayReceipt = (dateIndicator: number) => {
    axios.get(`http://172.16.10.150/husapp/api/receipt/${dateIndicator}`)
    .then((response) => {
      if (response.data) {
        console.log('receipt_Successfully: ', response.data)
        store.dispatch({
          type: 'FETCH_TODAY_RECEIPT',
          payload: response.data
        });
      }
      else {
        console.log('error: ', response.data);
        store.dispatch({
          type: 'FETCH_TODAY_RECEIPT',
          payload: {}
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });

    return true;
};

export { requestTodayReceipt };
