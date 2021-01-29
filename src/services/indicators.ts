import store from "../store";
import storage from '../services/asyncStorage';

const session_timeout_alert = () => {
  storage.removeData('@access_token').then( () => {
    store.dispatch({
      type: 'DISPLAY_ALERT',
      payload: {
        iconColor: '#DE4258',
        iconName: 'close-octagon-outline',
        iconType: 'material-community',
        isVisible: true,
        title: 'Su sesión caducó',
        subtitle: 'No se pudo verificar su identidad.',
        btnHandler: () => {
          store.dispatch({ type: 'CLOSE_ALERT', payload: false });
          store.dispatch({ type: 'RESET_LOGIN_STATE', payload: [] });
        }
      }
    });
  })
}

const server_error_alert = (shutdown: boolean) => {
  store.dispatch({
    type: 'DISPLAY_ALERT',
    payload: {
      iconColor: '#DE4258',
      iconName: 'close-octagon-outline',
      iconType: 'material-community',
      isVisible: true,
      title: 'Error de servidor',
      subtitle: 'Intentelo de nuevo más tarde!',
      btnHandler: () => {
        store.dispatch({ type: 'CLOSE_ALERT', payload: false });
        shutdown && store.dispatch({ type: 'RESET_LOGIN_STATE', payload: [] });
      }
    }
  });
}

const UnauthenticatedErrorHandler = (navigation: any) => {
  store.dispatch({ type: 'RESET_RECEIPT_STATE', payload: [] });
  navigation.goBack();
  session_timeout_alert();
  store.dispatch({type: 'SET_LOADING', payload: false});
};

export { server_error_alert, session_timeout_alert, UnauthenticatedErrorHandler };
