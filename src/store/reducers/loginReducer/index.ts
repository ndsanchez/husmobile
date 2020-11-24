const LoginInitialState = {
    isLoading: false,
    username: '',
    password: '',
    login: {
        Bearer: '',
        error: '',
    }
};

interface IAction {
    type: string,
    payload: string | Object,
};

const loginReducer = (state = LoginInitialState, action:IAction) => {
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
                login: action.payload,
                isLoading: false,
            }
        case 'LOGIN_FAILED':
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
            return state;
    }
};

export default loginReducer;
