import axios from 'axios';
import store from '../../store';

const fetchInterconsultation = (token:string , OIDCENATE: number, OIDESPECI: number) => {
    //store.dispatch(setLoading(true));
    axios.get(`http://172.16.10.150/husapp/api/interconsultation/${OIDCENATE}/${OIDESPECI}`, { headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }})
    .then((response) => {
      if (response.data) {
        console.log('yes: ', response.data)
        store.dispatch({
          type: 'LIST_INTERCONSULTATIONS',
          payload: response.data
        });
      }
      else {
        console.log('error: ', response.data);
        store.dispatch({
          type: 'LIST_INTERCONSULTATIONS',
          payload: []
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export { fetchInterconsultation };
