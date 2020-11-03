import axios from 'axios';
import store from '../../store';
import { loginResponse, setLoading } from '../../store/login/action';

const loginRequest = (username: string, password: string) => {
    store.dispatch(setLoading(true));
    axios.post('http://172.16.10.150/husapp/api/login', {
      username,
      password,
    })
    .then((response) => {
      store.dispatch(loginResponse(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export { loginRequest };
