import store from "../store";

const session_timeout_alert = () => {
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
}

const server_error_alert = () => {
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
        store.dispatch({ type: 'RESET_LOGIN_STATE', payload: [] });
      }
    }
  });
}

export { server_error_alert, session_timeout_alert };
