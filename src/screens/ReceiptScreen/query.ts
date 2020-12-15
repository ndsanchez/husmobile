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
