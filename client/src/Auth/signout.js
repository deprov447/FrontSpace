import axios from 'axios';

const signoutHandler = (userContext, setUserContext) => {
  console.log(`Bearer ${userContext.token}`);
  axios
    .get(`${process.env.REACT_APP_SERVER_URL}/signout`, {
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
        Authorization: `Bearer ${userContext.token}`,
      },
    })
    .then(async res => {
      setUserContext(prev => {
        return { ...prev, details: undefined, token: null };
      });
      window.localStorage.setItem('signout', Date.now());
    });
};

export default signoutHandler;
