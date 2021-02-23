import store from '../../store';
import storage from '../../services/asyncStorage'; 

const loginRequest = async (username: string, password: string) => {
  store.dispatch({type: 'SHOW_PRIMARY_LOADING_INDICATOR', payload: true});

  await fetch('http://husmobile.hus.org.co:8069/huservice/api/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    }),
  })
  .then(response => response.json())
  .then(res => {
    if(!res.hasOwnProperty('error')) {
      store.dispatch({ type: 'LOGIN_SUCCESS', payload: res });
      storage.removeData('@access_token').then( () => {
        storage.storeData('@access_token', res.Bearer)
      })
    }
    else {
      store.dispatch({ type: 'LOGIN_FAILED', payload: res });
      store.dispatch({type: 'SHOW_PRIMARY_LOADING_INDICATOR', payload: false});
    }
  })
  .catch(err => {
    store.dispatch({type: 'SHOW_PRIMARY_LOADING_INDICATOR', payload: false})
  });
};

export { loginRequest };
