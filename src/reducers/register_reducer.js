export default function(state = {}, action) {
	switch(action.type) {
		case 'TEST':
			return {...state, ...action.payload}
		case 'INCREMENT_VALID_ANSWER':
			return { ...state,
				register: {
					...state.register,
					numberOfValidAnswers: ++state.register.numberOfValidAnswers,
					isValid             : state.register.numberOfFields === state.register.numberOfValidAnswers,
				},
			}
		default:
			return state;
	}
}
