const LoginInitialState = {
    username: '',
    password: '',
    login: {
        Bearer: '',
        user: {},
        error: '',
    }
};

interface IAction {
    type: string,
    payload: string | Object,
};

const loginReducer = (state = LoginInitialState, action:IAction) => {
    switch (action.type) {
        case 'LOGOUT':
            return {
                ...state,
                password: '',
                login: {
                    Bearer: '',
                    user: {}
                }
            };
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
        default:
            return state;
    }
};

export default loginReducer;
