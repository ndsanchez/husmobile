import axios from 'axios';
import store from '../../store';

const requestTodayReceipt = (OIDCENATE: number) => {
    //store.dispatch(setLoading(true));
    axios.get(`http://172.16.10.150/husapp/api/receipt/${OIDCENATE}`)
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
