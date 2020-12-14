const generalInitialState = {
  isLoading: false,
  place: {
    code: '4',
    name: 'Bogotá', 
  },
  notification: {
    background: '#DE4258',
    iconName: 'hand-stop-o',
    iconType: 'font-awesome',
    isVisible: false,
    text: '¡Acceso denegado!',
  },
  alert: {
    iconColor: '#DE4258',
    iconName: 'close-octagon-outline',
    iconType: 'material-community',
    isVisible: false,
    title: 'Su sesión caducó',
    subtitle: 'No se pudo verificar su identidad.'
  }
};

interface IAction {
  type: string,
  payload: string | Object,
};

const generalReducer = (state = generalInitialState, action:IAction) => {
  switch (action.type) {
      case 'DISPLAY_ALERT':
        return {
          ...state,
          alert: action.payload
        };

      case 'DISPLAY_NOTIFICATION':
        return {
          ...state,
          notification: action.payload
        };

      case 'SET_LOADING':
        return {
          ...state,
          isLoading: action.payload,
        };

      case 'SET_PLACE':
        return {
          ...state,
          place: action.payload,
        };

      default:
        return state;
  }
};

export default generalReducer;
