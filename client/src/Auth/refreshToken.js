import axios from 'axios';

const refreshToken = () => {
  console.log('ref token');
  axios
    .post(
      `${process.env.REACT_APP_SERVER_URL}/refreshToken`,
      {},
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then(res => {
      console.log(res.data);
      if (res.ok) return res.data;
      else return null;
    })
    .catch(err => {
      console.log(err);
    });
};

export default refreshToken;
