import store from '../../store';

const loginRequest = async (username: string, password: string) => {

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
    res.hasOwnProperty('error')
      ? store.dispatch({ type: 'LOGIN_SUCCESS', payload: res })
      : store.dispatch({ type: 'LOGIN_FAILED', payload: res });
  })
  .catch(err => {console.log(err)});
};

export { loginRequest };
