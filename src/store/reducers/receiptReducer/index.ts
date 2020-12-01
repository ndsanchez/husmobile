const receiptInitialState = {
  todayReceipt: {
    hoy: '',
    totalAnuladoHoy: '',
    totalFacturadoHoy: '',
    totalGananciaHoy: ''
  },
};

interface IAction {
  type: string,
  payload: string | Object,
};

const receiptReducer = (state = receiptInitialState, action:IAction) => {
  switch (action.type) {
      case 'FETCH_TODAY_RECEIPT':
        return {
          ...state,
          todayReceipt: action.payload,
        }
      default:
        return state;
  }
};

export default receiptReducer;
