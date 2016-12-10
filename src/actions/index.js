// import axios from 'axios';

export const POST_SIGNIN = 'POST_SIGNIN';

// const ROOT_URL = 'http://localhost:3000';

export function postSignIn(data) {

  console.log('this is data', data);
  // axios.(`${ROOT_URL}/api/auth/signin`, data)
  //   .then(function() {
  //     console.log('inside post promise');
  //   })

  fetch(`api/auth/signin`, {
    method: 'post',
    mode  : 'cors',
    body  : JSON.stringify(data),
  })
    .then(function(data) {
      console.log('this is response data', data);
    })

}
