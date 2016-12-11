import axios from 'axios';

export const POST_SIGNIN = 'POST_SIGNIN';

export function postLogin(data) {
  axios.post('/api/auth/signin', data)
    .then((response) => {
      console.log('this is response')
      if (response.data.status === 200) {
        console.log('status 200')
        localStorage.setItem('token', response.data.token);
        return true;
      } else {
        console.log('else')
        return false;
      }
    });
}

export function postSignup(data) {
  axios.post('/api/auth/signup', data)
    .then((response) => {
      if (response.data.status === 200) {
        localStorage.setItem('token', response.data.token);
        return true;
      } else {
        return false;
      }
    })
}

