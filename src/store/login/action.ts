const SET_USERNAME = 'SET_USERNAME';
const SET_PASSWORD = 'SET_PASSWORD';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

interface IAction {
    type: string,
    payload: string | object,
};

const setUsername = (username: string): IAction => {
    return {
        type: SET_USERNAME,
        payload: username,
    };
};

const setPassword = (password: string): IAction => {
    return {
        type: SET_PASSWORD,
        payload: password,
    };
};

const loginSuccess = (response:object): IAction => {
    return {
        type: LOGIN_SUCCESS,
        payload: response,
    };
};

export { setUsername, setPassword, loginSuccess };
