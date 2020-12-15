import axios from 'axios';
import store from '../../store';

const UnauthenticatedErrorHandler = (navigation: any) => {
  store.dispatch({
    type: 'DISPLAY_ALERT',
    payload: {
      iconColor: '#DE4258',
      iconName: 'close-octagon-outline',
      iconType: 'material-community',
      isVisible: true,
      title: 'Su sesión caducó',
      subtitle: 'No se pudo verificar su identidad.',
      btnHandler: () => store.dispatch({
        type: 'CLOSE_ALERT',
        payload: false
      })
    }
  });
  navigation.goBack();
  store.dispatch({type: 'SET_LOADING', payload: false});
};

const requestTodayReceipt = (dateIndicator: number, bearer: string, navigation: any) => {

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
          UnauthenticatedErrorHandler(navigation);
          break;

        default:
          console.log('otro');
          break;
      }
    });
};

export { requestTodayReceipt };
