const LoginInitialState = {
    username: '',
    password: '',
    login: {
        Bearer: '',
        user: {},
        error: '',
        permissions: []
    },
    showPrimaryLoadingIndicator: false
};

interface IAction {
    type: string,
    payload: string | Object | undefined,
};

const loginReducer = (state = LoginInitialState, action:IAction) => {
    switch (action.type) {
        case 'RESET_LOGIN_STATE':
            return LoginInitialState;

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
        case 'SET_TOKEN':
            return {
                ...state,
                login: {
                    ...state.login,
                    Bearer: action.payload
                },
            };
        case 'SHOW_PRIMARY_LOADING_INDICATOR':
            return {
                ...state,
                showPrimaryLoadingIndicator: action.payload
            }
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
                login: action.payload,
                isLoading: false,
            }
        default:
            return state;
    }
};

export default loginReducer;
