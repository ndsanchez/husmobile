import axios from 'axios';
import store from '../../store';
import { loginFailed, loginSuccess, setLoading } from '../../store/actions/loginAction';

const loginRequest = (username: string, password: string) => {
    store.dispatch(setLoading(true));
    axios.post('http://172.16.10.150/husapp/api/login', {
      username,
      password,
    })
    .then((response) => {
      if (response.data.hasOwnProperty('error')) {
        console.log(response.data);
        store.dispatch(loginFailed(response.data));
      }
      else {
        console.log('Success')
        store.dispatch(loginSuccess(response.data));
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export { loginRequest };
