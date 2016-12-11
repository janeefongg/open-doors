const initialState = {
  register: {
    username            : '',
    password            : '',
    email               : '',
    firstName           : '',
    lastName            : '',
    numberOfFields      : 5,
    numberOfValidAnswers: 0,
  },
  login: {
    username            : '',
    password            : '',
    numberOfFields      : 2,
    numberOfValidAnswers: 0,
    isValid             : false,
  },
}

export default initialState;