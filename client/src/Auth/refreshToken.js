import axios from 'axios';

const refreshToken = async () => {
  console.log('ref token');
  let newToken;
  await axios
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
      if (res.data.success) {
        console.log('res.data.success', 'is true');
        newToken = res.data.token;
      }
    })
    .catch(err => {
      console.log(err);
    });
  return newToken;
};

export default refreshToken;
