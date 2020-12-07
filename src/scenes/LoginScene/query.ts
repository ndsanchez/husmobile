import store from '../../store';

const loginRequest = async (username: string, password: string) => {
  store.dispatch({type: 'SHOW_PRIMARY_LOADING_INDICATOR', payload: true});

  await fetch('http://172.16.10.150/husapp/api/login', {
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
    }
    else {
      store.dispatch({ type: 'LOGIN_FAILED', payload: res });
      store.dispatch({type: 'SHOW_PRIMARY_LOADING_INDICATOR', payload: false});
    }
  })
  .catch(err => { store.dispatch({type: 'SHOW_PRIMARY_LOADING_INDICATOR', payload: false}); console.log(err)});
};

export { loginRequest };
