const receiptInitialState = {
  todayReceipt: [],
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

      case 'RESET_RECEIPT_STATE':
        return receiptInitialState;

      default:
        return state;
  }
};

export default receiptReducer;
