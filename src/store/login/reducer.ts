const initialState = {
    isLoading: true,
    username: '',
    password: '',
    login: {
        access_token: '',
    }
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
        case 'LOGIN_RESPONSE':
            return {
                ...state,
                password: '',
                login: action.payload,
                isLoading: false,
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            }
        default:
            return initialState;
    }
};

export default loginReducer;
