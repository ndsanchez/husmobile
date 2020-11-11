const SET_USERNAME = 'SET_USERNAME';
const SET_PASSWORD = 'SET_PASSWORD';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';
const SET_LOADING = 'SET_LOADING';

interface IAction {
    type: string,
    payload: string | object | boolean,
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

const loginFailed = (response:object): IAction => {
    return {
        type: LOGIN_FAILED,
        payload: response,
    };
};

const setLoading = (flag:boolean): IAction => {
    return {
        type: SET_LOADING,
        payload: flag,
    };
};

export { setUsername, setPassword, loginFailed, loginSuccess, setLoading };
