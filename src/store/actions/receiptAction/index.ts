const FETCH_TODAY_RECEIPT = 'FETCH_TODAY_RECEIPT';
const RESET_RECEIPT_STATE = 'RESET_RECEIPT_STATE'; 

interface IAction {
    type: string,
    payload: string | object | boolean,
};

type todayReceiptType = {
    todayReceipt: {
        hoy: string,
        totalAnuladoHoy: number,
        totalFacturadoHoy: number,
        totalGananciaHoy: number
    }
};

const fetchTodayReceipt = (payloadData:todayReceiptType): IAction => {
    return {
        type: FETCH_TODAY_RECEIPT,
        payload: payloadData,
    };
};

const resetReceiptState = () => {
    return {
        type: RESET_RECEIPT_STATE,
        payload: [],
    };
};

export { fetchTodayReceipt, resetReceiptState };
