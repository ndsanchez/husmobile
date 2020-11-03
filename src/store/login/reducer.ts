const initialState = {
    username: '',
    password: '',
};

interface IAction {
    type: string,
    payload: string | Object,
};

const loginReducer = (state = initialState, action:IAction) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return {
                ...state,
                username: action.payload,
            };
        case 'SET_PASSWORD':
            return {
                ...state,
                password: action.payload,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                password: '',
                auth: action.payload,
            }
        default:
            return initialState;
    }
};

export default loginReducer;
