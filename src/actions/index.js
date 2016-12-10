import axios from 'axios';

export const POST_SIGNIN = 'POST_SIGNIN';

export function postSignIn(data) {
  axios.post('/api/auth/signin', data)
    .then((response) => {
      if (response.data.status === 200) {
        localStorage.setItem('token', response.data.token);
      } else {

      }
    });
}
